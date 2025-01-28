import { defineStore } from "pinia";
import { Modal } from "flowbite";

export const useNavigationStore = defineStore("navigation", {
	state: () => ({
		navigationIsOpen: false,
		modal: null,
		modalOptions: {
			backdropClasses:
				"w-screen h-screen bg-coal bg-opacity-25 fixed top-0 left-0 right-0 bottom-0 z-50 inset-0 backdrop-filter backdrop-blur-3xl",
			closable: true,
			placement: "center",
			backdrop: "dynamic",
		},
	}),
	actions: {
		toggleModal(modalId) {
			this.navigationIsOpen = false;
			const modalEl = document.querySelector(modalId);
			this.modal = new Modal(modalEl, this.modalOptions, {
				override: true,
			});
			this.modal.toggle();
		},
		closeModal() {
			this.modal.hide();
			this.navigationIsOpen = false;
		},
	},
});
