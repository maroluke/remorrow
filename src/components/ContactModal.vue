<script>
import { Modal } from "flowbite";
import SquircleButton from "@components/SquircleButton.vue";
import EmailIcon from "@components/icons/IconEmail.vue";
export default {
	name: "ContactModal",
	components: {
		SquircleButton,
		EmailIcon,
	},
	mounted() {
		const $buttonElement = document.querySelector("#button");
		const $modalElement = document.querySelector("#modal");
		const $closeButton = document.querySelector("#closeButton");

		const modalOptions = {
			backdropClasses:
				"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 backdrop-filter backdrop-blur-sm",
		};

		if ($modalElement) {
			const modal = new Modal($modalElement, modalOptions);
			$buttonElement.addEventListener("click", () => modal.toggle());
			$closeButton.addEventListener("click", () => modal.hide());

			// programmatically show
			// modal.show();
		}
	},
};
</script>

<template>
	<SquircleButton
		:icon="'mail'"
		:classes="'bg-coal'"
		class="mt-5"
		id="button"
		type="button"
	>
		<template #buttonRef>Melde dichxx</template>
	</SquircleButton>

	<div
		id="modal"
		tabindex="-1"
		aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-[100] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
	>
		<div class="relative w-full h-full max-w-2xl md:h-auto">
			<!-- Modal content -->
			<div class="relative bg-snow rounded-lg shadow">
				<!-- Modal header -->
				<div class="flex items-start justify-between p-5 rounded-t">
					<h3 class="text-coal">Kontakt</h3>

					<button
						id="closeButton"
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
					>
						<svg
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-6 space-y-6">
					<p class="text-base text-dark">
						Beschreibe uns dein Anliegen und wir kontaktieren dich.
					</p>
					<form class="flex flex-col gap-5">
						<!-- User Message -->
						<div>
							<label
								for="message"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Deine Nachricht:</label
							>
							<textarea
								id="message"
								rows="4"
								class="border-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:text-white"
								placeholder="Was brauchst du? Was möchtest du erreichen? Wieso glaubst du wir können dir helfen?"
							></textarea>
						</div>

						<!-- Select Purpose -->
						<div>
							<label
								for="countries"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Ich melde mich als:</label
							>
							<select
								id="countries"
								class="bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white"
							>
								<option>als Volunteer</option>
								<option>als Unternehmen</option>
								<option>als Verein</option>
								<option>einfach so</option>
							</select>
						</div>

						<!-- User E-mail -->
						<div>
							<label
								for="website-admin"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Deine E-Mail Adresse:</label
							>
							<div class="flex">
								<span
									class="inline-flex items-center px-3 text-sm text-snow bg-coal rounded-l-md"
								>
									<EmailIcon
										class="fill-current h-4 hover:fill-rich-electric-blue"
									/>
								</span>

								<input
									type="text"
									id="website-admin"
									class="rounded-none rounded-r-lg border-none bg-white text-coal focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
									placeholder="steve.jobs@me.com"
								/>
							</div>
						</div>
					</form>
				</div>
				<!-- Modal footer -->
				<div class="flex items-center p-6 space-x-2 border-t rounded-b">
					<button
						type="button"
						class="flex-1 text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Abschicken
					</button>
					<button
						type="button"
						class="flex-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
					>
						Abbrechen
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
