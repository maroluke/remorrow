<script setup>
import { useNavigationStore } from "@/stores/navigation";
import LogoIcon from "@/components/icons/IconLogo.vue";
import LogoMiniIcon from "@/components/icons/IconLogoMini.vue";

const navigationState = useNavigationStore();
</script>

<template>
	<header class="absolute top-0 left-0 right-0 z-[60]">
		<div class="flex items-center justify-between px-5 h-20 relative">
			<!-- Logo -->
			<RouterLink to="/" class="absolute h-8">
				<Transition name="logo-mini-toggle" v-show="navigationState.navigationIsOpen">
					<LogoMiniIcon
						class="logo fill-gray-500 transition-opacity duration-1000 delay-300 fixed"
					/>
				</Transition>
				
				<Transition name="logo-toggle" v-show="!navigationState.navigationIsOpen">
					<LogoIcon
						v-if="this.$route.name === 'Home'"
						class="logo fill-snow h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-500 delay-500 absolute -left-1 text-left"
					/>

					<LogoMiniIcon
						v-else
						class="logo fill-snow h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-500 delay-500 absolute left-0"
					/>
				</Transition>
			</RouterLink>
			<!-- Open navigation button -->
			<div @click="navigationState.navigationIsOpen = !navigationState.navigationIsOpen"
				class="burger flex cursor-pointer items-center h-10 transition duration-200 fixed right-4">
				<div class="flex flex-col gap-1 bg-dark bg-opacity-0 backdrop-blur-xl py-2 px-2 rounded-sm">
					<span class="w-10 h-0.5 bg-gray-500"></span>
					<span class="w-10 h-0.5 bg-gray-500"></span>
					<span class="w-10 h-0.5 bg-gray-500"></span>
				</div>
			</div>
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
	@apply opacity-0 -left-2 transition-none;
}

.logo-mini-toggle-enter-active,
.logo-mini-toggle-leave-active {
	@apply opacity-100;
}

.logo-mini-toggle-enter-from,
.logo-mini-toggle-leave-to {
	@apply opacity-0 duration-200 delay-[0ms];
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
