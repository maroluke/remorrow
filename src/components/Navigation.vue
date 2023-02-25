<script setup>
import { useNavigationStore } from "@/stores/navigation";
import NavigationItem from "./NavigationItem.vue";
import ContactIcons from "./ContactIcons.vue";
import { RouterLink } from "vue-router";

const navigationState = useNavigationStore();
</script>

<template>
	<!-- Main Navigation -->
	<Transition name="nav-toggle">
		<nav
			v-show="navigationState.navigationIsOpen"
			class="nav z-50 fixed w-full h-full px-2 pt-2 max-w-screen-sm top-0 right-0 bg-coal bg-opacity-25 backdrop-blur-sm duration-300"
		>
			<div class="bg-snow rounded-lg overflow-hidden z-40 shadow-2xl">
				<div class="flex flex-col justify-between pt-12">
					<!-- Close navigation button -->
					<!-- <div
						class="close-nav flex justify-between items-center cursor-pointer z-20 w-full py-4 pl-4 pr-0"
					>
						<div
							@click="navigationState.toggleNavigation"
							class="flex justify-center items-center w-10 h-5 flex-shrink"
						>
							<span
								class="w-6 h-0.5 bg-silver rotate-45 block absolute"
							></span>
							<span
								class="w-6 h-0.5 bg-silver -rotate-45 block absolute"
							></span>
						</div>
					</div> -->

					<!-- The menu -->
					<ul
						@click="navigationState.navigationIsOpen = !navigationState.navigationIsOpen"
						class="flex gap-1 flex-col z-10 flex-grow pt-5 text-dark"
					>
						<NavigationItem :to="'/community'"
							>Wir bauen eine Community</NavigationItem
						>
						<NavigationItem :to="'/projekte'"
							>Wir fördern Projekte</NavigationItem
						>
						<NavigationItem :to="'/wer-wir-sind'"
							>Wer wir sind</NavigationItem
						>
						<NavigationItem :to="'/sei-dabei'"
							>Sei ein Teil davon</NavigationItem
						>
						<NavigationItem :to="'/unser-weg'"
							>Unser Weg</NavigationItem
						>
					</ul>
					
					<ul
						@click="navigationState.navigationIsOpen = !navigationState.navigationIsOpen"
						class="secondary-nav flex flex-col gap-4 px-8 py-8 text-base text-gray-500"
					>
						<RouterLink to="/glossar"
							class="font-light hover:text-rich-electric-blue"
							>Glossar</RouterLink
						>
						<RouterLink to="/impressum"
							class="font-light hover:text-rich-electric-blue"
							>Impressum</RouterLink
						>
					</ul>

					<ContactIcons class="px-8 bg-snow" />
				</div>
			</div>
		</nav>
	</Transition>
</template>

<style>
.nav-toggle-enter-active,
.nav-toggle-leave-active {
	@apply opacity-100 transition-opacity;
}

.nav-toggle-enter-from,
.nav-toggle-leave-to {
	@apply opacity-0;
}

.nav-open {
	@apply overflow-hidden;
}
</style>
