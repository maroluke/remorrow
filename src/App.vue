<script>
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useNavigationStore } from "./stores/navigation";

export default defineComponent({
	name: "App",
	components: {
		Navigation,
		AppHeader,
		AppFooter,
		RouterView,
	},
	setup() {
		const navigationState = useNavigationStore();

		return {
			navigationState,
		};
	},
});
</script>

<template>
	<AppHeader :class="navigationState.navigationIsOpen ? 'nav-open' : ''" />

	<Navigation />

	<RouterView />

	<AppFooter />
</template>
