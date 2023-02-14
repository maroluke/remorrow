import { defineStore } from "pinia";

export const useNavigationStore = defineStore('navigation', {
	state: () => ({
		navigationIsOpen: false,
	}),
});
