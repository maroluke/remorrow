<script setup>
import EmailIcon from "@components/icons/IconEmail.vue";
import Success from "@components/icons/success.vue";
import Error from "@components/icons/error.vue";
import { useNavigationStore } from "@/stores/navigation";
import { defineProps } from "vue";

const navigationState = useNavigationStore();
const props = defineProps(["paid"]);
</script>

<template>
	<div
		id="subscription-modal"
		tabindex="-1"
		aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-[100] w-full p-4 hidden overflow-x-hidden overflow-y-auto inset-0 h-full"
	>
		<div class="relative w-full h-auto max-w-screen-sm">
			<!-- Modal content -->
			<div
				class="relative bg-snow text-coal rounded-xl shadow flex justify-between items-start gap-5"
			>
				<div class="max-w-24 pl-5 pt-7">
					<Success v-if="paid" class="w-full h-full" />
					<Error v-else class="w-full h-full" />
				</div>

				<div class="py-5 pr-5">
					<!-- Modal header -->
					<div
						class="flex items-start justify-between rounded-t mb-5"
					>
						<h3 v-if="paid">Aktion erfolgreich</h3>
						<h3 v-else>Aktion fehlgeschlagen</h3>

						<button
							@click="navigationState.closeModal"
							type="button"
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 -mr-1.5 -mt-1.5 ml-auto inline-flex items-center"
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
					<div class="flex overflow-hidden">
						<div class="text-coal">
							<p v-if="paid" class="text-base">
								Vielen Dank! Es freut uns ungeheuer dass du uns
								unterstützt.
							</p>

							<p v-else class="text-base">
								Es tut uns leid, dass die Aktion fehlgeschlagen
								ist.
							</p>

							<p class="text-base !m-0">
								Falls du Fragen hast, melde dich gerne unter
								<a
									href="mailto:hey@remorrow.world"
									class="text-rich-electric-blue hover:text-blue-600"
									>hey@remorrow.world</a
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
