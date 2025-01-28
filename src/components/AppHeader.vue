<script setup>
import { useNavigationStore } from "@/stores/navigation";
import LogoIcon from "@/components/icons/IconLogo.vue";
import LogoMiniIcon from "@/components/icons/IconLogoMini.vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import Navigation from "@components/Navigation.vue";

const navigationState = useNavigationStore();

const route = useRoute();
</script>

<template>
	<header class="absolute top-0 left-0 right-0 z-50">
		<div
			class="flex items-center justify-between px-6 h-20 relative xl:m-12"
		>
			<!-- Logo -->
			<RouterLink to="/" class="absolute h-8 z-20 xl:h-12">
				<Transition
					name="logo-toggle"
					v-show="!navigationState.navigationIsOpen"
				>
					<LogoMiniIcon
						v-if="route.name && route.name !== 'Home'"
						class="logo text-moon w-auto h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-1000 absolute -left-1 text-left"
					/>
				</Transition>

				<Transition
					name="logo-toggle"
					v-show="!navigationState.navigationIsOpen"
				>
					<LogoIcon
						v-if="route.name && route.name === 'Home'"
						class="logo text-moon w-auto h-full transition-all ease-[cubic-bezier(0.85, 0, 0.15, 1)] duration-1000 absolute -left-1 text-left"
					/>
				</Transition>
			</RouterLink>
			<!-- Open navigation button -->
			<div
				@click="
					navigationState.navigationIsOpen =
						!navigationState.navigationIsOpen
				"
				:class="{
					'!bg-opacity-0 !translate-x-2':
						navigationState.navigationIsOpen,
				}"
				class="flex cursor-pointer items-center h-7 w-14 transition-all translate-x-0 duration-200 fixed right-4 z-20 xl:right-16 bg-snow bg-opacity-25 backdrop-blur-lg rounded-sm px-2 pt-0.5"
			>
				<div
					class="relative transition-all duration-500 items-center justify-center -translate-y-1"
				>
					<span
						:class="{
							'rotate-45 !translate-y-0 !bg-moon !top-0.5 !w-6 !translate-x-2':
								navigationState.navigationIsOpen,
						}"
						class="w-10 h-0.5 bg-rich-electric-blue transition-all duration-500 absolute -top-1 left-0 translate-y-0 translate-x-0 rounded-full"
					></span>
					<span
						:class="{
							'opacity-0 !bg-moon !translate-y-0 !top-0.5 !w-6 !translate-x-2':
								navigationState.navigationIsOpen,
						}"
						class="w-10 h-0.5 bg-rich-electric-blue transition-all duration-500 absolute -top-1 left-0 translate-y-[6px] translate-x-0 rounded-full"
					></span>
					<span
						:class="{
							'-rotate-45 !translate-y-0 !bg-moon !top-0.5 !w-6 !translate-x-2':
								navigationState.navigationIsOpen,
						}"
						class="w-10 h-0.5 bg-rich-electric-blue transition-all duration-500 absolute -top-1 left-0 translate-y-[12px] translate-x-0 rounded-full"
					></span>
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
	@apply opacity-0 -translate-x-3 transition-none sm:transition-all;
}
</style>
