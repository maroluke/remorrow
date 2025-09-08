import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@assets/main.css";

// UTM Parameter Tracking für Plausible
function trackUTMParameters() {
	const urlParams = new URLSearchParams(window.location.search);
	const utmParams = {};
	
	// UTM Parameter sammeln
	['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
		if (urlParams.has(param)) {
			utmParams[param] = urlParams.get(param);
		}
	});
	
	// An Plausible senden
	if (Object.keys(utmParams).length > 0) {
		// @ts-ignore
		if (window.plausible) {
			// @ts-ignore
			window.plausible('UTM Parameters', {
				props: utmParams
			});
		}
	}
}

const app = createApp(App);

app.use(createPinia());
app.use(router);

// UTM Tracking nach dem Mount
app.mount("#app");

// UTM Parameter tracken
trackUTMParameters();
