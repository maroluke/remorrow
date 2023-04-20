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
		toggleModal() {
			this.navigationIsOpen = false;
			const modalEl = document.querySelector("#contact-modal");
			this.modal = new Modal(modalEl, this.modalOptions);
			this.modal.toggle();
		},
		closeModal() {
			this.modal.hide();
		},
	},
});

// mounted() {
// 		const modalToggle = document.querySelectorAll(".modal-toggle");
// 		const modalElement = document.querySelector("#contact-modal");
// 		const closeModal = document.querySelectorAll(".modal-close");

// 		const modalOptions = {
// 			backdropClasses:
// 				"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 backdrop-filter backdrop-blur-sm",
// 		};

// 		if (modalElement) {
// 			const modal = new Modal(modalElement, modalOptions);

// 			modalToggle.forEach((toggle, i) => {
// 				toggle.addEventListener("click", (e) => {
// 					e.preventDefault();

// 					modal.toggle();

// 					for (const close in closeModal) {
// 						if (typeof closeModal[close] === "object") {
// 							this.closeModal(closeModal[close], modal);
// 						}
// 					}
// 				});
// 			});
// 		}
// 	},
