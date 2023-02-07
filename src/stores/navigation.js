import { defineStore } from "pinia";

export const useNavigationStore = defineStore({
	id: "navigation",
	state: () => ({
		navigationIsOpen: false,
	}),

	actions: {
		toggleNavigation() {
			this.navigationIsOpen = !this.navigationIsOpen;
			document.body.classList.toggle("nav-open");
		},
	},

	getters: {
		isNavigationOpen: (state) => {
			return state.navigationIsOpen;
		},
	},
});
