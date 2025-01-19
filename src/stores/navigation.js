import { defineStore } from "pinia";
import { Modal } from "flowbite";

export const useNavigationStore = defineStore("navigation", {
	state: () => ({
		navigationIsOpen: false,
		modal: null,
		modalOptions: {
			backdropClasses:
				"bg-gray-900 bg-opacity-50 fixed inset-0 z-40 backdrop-filter backdrop-blur-3xl",
		},
	}),
	actions: {
		toggleModal(modalId) {
			this.navigationIsOpen = false;
			const modalEl = document.querySelector(modalId);
			this.modal = new Modal(modalEl, this.modalOptions);
			this.modal.toggle();
		},
		closeModal() {
			this.modal.hide();
		},
	},
});
