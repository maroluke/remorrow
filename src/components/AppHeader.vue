<script setup>
import { useNavigationStore } from "@/stores/navigation";
import LogoIcon from "@/components/icons/IconLogo.vue";
import LogoMiniIcon from "@/components/icons/IconLogoMini.vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import Navigation from "@components/Navigation.vue";

const navigationState = useNavigationStore();

const router = useRouter();
</script>

<template>
	<header class="absolute top-0 left-0 right-0 z-50">
		<div class="flex items-center justify-between px-6 h-20 relative xl:m-12">
			<!-- Logo -->
			<RouterLink to="/" class="absolute h-8 z-20 xl:h-12">
				<Transition name="logo-toggle" v-show="!navigationState.navigationIsOpen">
					<LogoIcon
						v-if="router.currentRoute.value.name === 'Home'"
						class="logo text-moon w-auto h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-1000 absolute -left-1 text-left"
					/>

					<LogoMiniIcon
						v-else
						class="logo text-moon w-auto h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-500 delay-500 absolute left-0"
					/>
				</Transition>
			</RouterLink>
			<!-- Open navigation button -->
			<div @click="navigationState.navigationIsOpen = !navigationState.navigationIsOpen"
				class="burger flex cursor-pointer items-center h-10 transition duration-200 fixed right-4 z-20 xl:right-16">
				<div class="flex flex-col gap-1 bg-dark bg-opacity-0 backdrop-blur-xl py-2 px-2 rounded-sm">
					<span class="w-10 h-0.5 bg-moon"></span>
					<span class="w-10 h-0.5 bg-moon"></span>
					<span class="w-10 h-0.5 bg-moon"></span>
				</div>
			</div>

			<Navigation />
		</div>
	</header>
</template>

<style scoped>
.logo-toggle-enter-active,
.logo-toggle-leave-active {
	@apply opacity-100;
}

.logo-toggle-enter-from,
.logo-toggle-leave-to {
	@apply opacity-0 -translate-x-3 transition-none delay-[0ms] sm:transition-all;
}

/* .nav-open .logo {
	@apply fill-dark;
}

.nav-open .logo g:first-child {
	@apply hidden;
}

.nav-open .logo g:last-child {
	@apply block;
} */
/* .nav-open .burger > div span {
	@apply w-full;
} */
</style>
