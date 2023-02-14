<script>
import { RouterLink } from "vue-router";

export default {
	props: { ...RouterLink.props },
	computed: {
		isExternal() {
			return typeof this.to === "string" && this.to.startsWith("http");
		},
	},
};
</script>

<template>
	<li class="px-3">
		<a
			v-if="isExternal"
			:href="to"
			class="font-bold px-5 py-3 block rounded-lg text-xl text-coal bg-white hover:text-rich-electric-blue hover:bg-coal"
			><slot></slot
		></a>
		<RouterLink
			v-else
			v-bind="$props"
			class="font-bold px-5 py-3 block rounded-lg text-xl text-coal bg-white hover:text-rich-electric-blue hover:bg-coal"
			><slot></slot
		></RouterLink>
	</li>
</template>

<style scoped>
    .router-link-active {
        @apply bg-rich-electric-blue text-snow cursor-default hover:bg-rich-electric-blue hover:text-snow;
    }
</style>