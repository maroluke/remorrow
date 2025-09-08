import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@assets/main.css";

// UTM Parameter Tracking für Plausible
function trackUTMParameters() {
	console.log('🔍 Checking for UTM parameters...');
	const urlParams = new URLSearchParams(window.location.search);
	const utmParams = {};
	
	// UTM Parameter sammeln
	['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
		if (urlParams.has(param)) {
			utmParams[param] = urlParams.get(param);
			console.log(`✅ Found ${param}: ${urlParams.get(param)}`);
		}
	});
	
	console.log('📊 UTM Parameters found:', utmParams);
	
	// An Plausible senden
	if (Object.keys(utmParams).length > 0) {
		console.log('🚀 Sending to Plausible...');
		
		// Warten bis Plausible geladen ist
		const checkPlausible = () => {
			// @ts-ignore
			if (window.plausible) {
				console.log('✅ Plausible found, sending UTM data...');
				// @ts-ignore
				window.plausible('UTM Parameters', {
					props: utmParams
				});
				console.log('🎉 UTM Parameters tracked:', utmParams);
			} else {
				console.log('⏳ Waiting for Plausible...');
				setTimeout(checkPlausible, 100);
			}
		};
		checkPlausible();
	} else {
		console.log('❌ No UTM parameters found in URL');
	}
}

const app = createApp(App);

app.use(createPinia());
app.use(router);

// UTM Tracking nach dem Mount
app.mount("#app");

// UTM Parameter tracken
trackUTMParameters();
