<script>
import IconCheck from "./icons/IconCheck.vue";
import IconAddUser from "./icons/IconAddUser.vue";

export default {
	name: "FormModal",
	components: {
		IconCheck,
		IconAddUser,
	},
	data() {
		return {};
	},

	props: {
		message: {
			type: String,
			required: true,
		},

		type: {
			type: String,
			default: "",
		},
	},
};
</script>

<template>
	<div
		id="contact-modal"
		tabindex="-1"
		aria-hidden="true"
		class="fixed flex items-center justify-center top-0 left-0 right-0 z-[100] w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full"
	>
		<div class="relative w-full h-auto max-w-sm">
			<!-- Modal content -->
			<div class="relative bg-snow text-coal rounded-xl shadow-2xl">
				<!-- Modal header -->
				<div class="flex items-start justify-between p-5 rounded-t">
					<h3>Danke!</h3>

					<button
						@click="$emit('close')"
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
				<div class="p-6 pt-0 space-y-6 md:pt-0 md:mt-0 text-coal">
					<p v-html="message"></p>
					<hr />
					<p v-if="type !== 'survey'">
						Möchtest du weitere Teilnehmer*innen erfassen?
					</p>
					<div class="flex flex-col gap-5">
						<button
							v-if="type !== 'survey'"
							@click="$emit('addPerson')"
							type="button"
							class="flex-1 flex justify-between text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center disabled:opacity-25 disabled:cursor-not-allowed"
						>
							<span>Weitere*n Teilnehmer*in erfassen</span>

							<IconAddUser class="h-5 text-inherit" />
						</button>

						<button
							@click="
								$emit(
									'close',
									true,
									type === 'survey'
										? 'https://www.linkedin.com/company/remorrow/'
										: null
								)
							"
							type="button"
							class="flex-1 flex justify-between text-snow bg-coal hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center disabled:opacity-25 disabled:cursor-not-allowed"
						>
							<span>Fertig</span>

							<IconCheck class="h-5 text-inherit" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
