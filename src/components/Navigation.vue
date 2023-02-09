<script>
import { useNavigationStore } from "@/stores/navigation";
import NavigationItem from "./NavigationItem.vue";
import ContactIcons from "./ContactIcons.vue";

export default {
	name: "Navigation",
	components: {
		NavigationItem,
		ContactIcons,
	},
	data() {
		return {
			navigationState: {},
		};
	},
	mounted() {
		this.navigationState = useNavigationStore();
	},
};
</script>

<template>
	<!-- Main Navigation -->
	<Transition name="nav-toggle">
		<nav
			v-show="navigationState.isNavigationOpen"
			class="nav z-50 fixed w-full h-full px-2 pt-5 max-w-screen-sm top-0 right-0 bg-coal bg-opacity-25 backdrop-blur-sm duration-200"
		>
			<div class="bg-snow rounded-lg overflow-hidden z-40 shadow-2xl">
				<div class="flex flex-col justify-between">
					<!-- Close navigation button -->
					<div
						class="close-nav flex justify-between items-center cursor-pointer z-20 w-full py-4 pl-4 pr-0"
					>
						<!-- <IconLogo class="fill-silver" /> -->
						<div class="text-silver flex gap-1">
							<!-- <span class=" border-b-2 border-silver px-3 text-coal text-sm">DE</span>
							<span class="px-3 text-coal text-sm">EN</span> -->
						</div>

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
					</div>

					<!-- The menu -->
					<ul
						@click="navigationState.toggleNavigation"
						class="flex gap-1 flex-col z-10 flex-grow pt-2 text-dark"
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

					<ContactIcons class="px-4 bg-snow" />
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

.nav-open .logo {
	@apply fill-dark sm:fill-inherit;
}
</style>
