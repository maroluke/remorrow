const { IncomingWebhook } = require('@slack/webhook');

exports.handler = async (event, context) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Rate limiting: Max 10 requests per minute per IP
  const clientIP = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
  const rateLimitKey = `utm-track-${clientIP}`;
  
  // Simple in-memory rate limiting (in production, use Redis)
  if (!global.rateLimit) global.rateLimit = {};
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10;
  
  if (global.rateLimit[rateLimitKey]) {
    const requests = global.rateLimit[rateLimitKey].filter(time => now - time < windowMs);
    if (requests.length >= maxRequests) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({ error: 'Rate limit exceeded' }),
      };
    }
    global.rateLimit[rateLimitKey] = requests;
  } else {
    global.rateLimit[rateLimitKey] = [];
  }
  global.rateLimit[rateLimitKey].push(now);

  try {
    // UTM Parameter aus Query String extrahieren und validieren
    const queryParams = event.queryStringParameters || {};
    const utmParams = {};
    
    // Input validation function
    const validateUTM = (value) => {
      if (!value || typeof value !== 'string') return false;
      // Max length, no special characters except basic ones
      return value.length <= 100 && /^[a-zA-Z0-9\s\-_\.]+$/.test(value);
    };
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
      if (queryParams[param] && validateUTM(queryParams[param])) {
        utmParams[param] = queryParams[param];
      }
    });

    // Nur tracken wenn UTM Parameter vorhanden
    if (Object.keys(utmParams).length > 0) {
      console.log('UTM Parameters found:', utmParams);
      
      // An Plausible senden (Server-Side Event)
      const plausibleEvent = {
        domain: 'remorrow.world',
        name: 'UTM Parameters',
        url: event.headers.referer || 'https://remorrow.world',
        props: utmParams
      };

      // Plausible API Call mit Timeout und Error Handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      try {
        const response = await fetch('https://plausible.io/api/event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': event.headers['user-agent'] || 'Netlify Function'
          },
          body: JSON.stringify(plausibleEvent),
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        console.log('Plausible response:', response.status);
        
        if (!response.ok) {
          console.warn('Plausible API error:', response.status, response.statusText);
        }
      } catch (error) {
        clearTimeout(timeoutId);
        console.warn('Plausible API call failed:', error.message);
        // Continue with redirect even if tracking fails
      }
    }

    // Weiterleitung zur Ziel-URL
    const targetUrl = 'https://cinema.kinokoni.ch/order/showtimes/50-685/seats';
    const redirectUrl = new URL(targetUrl);
    
    // UTM Parameter zur Ziel-URL hinzufügen
    Object.keys(utmParams).forEach(key => {
      redirectUrl.searchParams.set(key, utmParams[key]);
    });

    return {
      statusCode: 302,
      headers: {
        ...headers,
        'Location': redirectUrl.toString()
      },
      body: '',
    };

  } catch (error) {
    console.error('Error:', error);
    
    // Fallback: Einfache Weiterleitung ohne Tracking
    return {
      statusCode: 302,
      headers: {
        ...headers,
        'Location': 'https://cinema.kinokoni.ch/order/showtimes/50-685/seats'
      },
      body: '',
    };
  }
};
