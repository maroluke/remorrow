<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useNavigationStore } from "./stores/navigation";

const navigationState = useNavigationStore();
</script>

<template>
	<Header :class="navigationState.navigationIsOpen ? 'nav-open' : ''" />

	<Navigation />

	<RouterView />

	<Footer />
</template>
