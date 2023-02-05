<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Header from "./components/Header.vue";

</script>

<template>
	<Header />

	<Navigation />

	<RouterView />
</template>