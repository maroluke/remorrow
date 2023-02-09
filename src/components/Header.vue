<template>
	<header class="absolute top-0 left-0 right-0 z-[60]">
		<div class="flex items-center justify-between px-6 h-24 relative">
			<!-- Logo -->
			<RouterLink to="/" class="absolute">
				<LogoIcon class="logo transition-all duration-1000 fill-snow opacity-100" />
			</RouterLink>
			<!-- Open navigation button -->
			<div
				@click="navigationState.toggleNavigation"
				class="burger flex cursor-pointer items-center h-10 transition-all duration-300 fixed right-4"
			>
				<div
					class="flex flex-col gap-1 bg-dark bg-opacity-0 backdrop-blur-xl py-2 px-2 rounded-sm"
				>
					<span class="w-10 h-0.5 bg-silver"></span>
					<span class="w-10 h-0.5 bg-silver"></span>
					<span class="w-10 h-0.5 bg-silver"></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useNavigationStore } from "@/stores/navigation";
import LogoIcon from "@/components/icons/IconLogo.vue";

const navigationState = useNavigationStore();
</script>

<style scoped>
.nav-open .logo {
	@apply opacity-0 duration-100;
}

/* .nav-open .burger > div span {
	@apply w-full;
} */
</style>
