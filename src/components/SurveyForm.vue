<template>
	<div class="matchmake-form">
		<form method="post" @submit.prevent="handleSubmit">
			<input type="hidden" name="survey-form" value="machtmake-survey" />

			<ul>
				<li class="mb-5 max-w-md">
					<label class="m-0 md:flex md:flex-col" for="rating">
						<p class="flex-1 leading-normal mb-2">
							Hat dir die match:make gefallen? *
						</p>
					</label>

					<div class="flex gap-1 justify-between">
						<div
							class="flex justify-between w-full items-center border rounded px-3 py-1 bg-white sm:pr-6"
						>
							<input
								type="radio"
								name="rating"
								v-model="form.rating"
								value="1"
								class="cursor-pointer w-4 h-full"
							/><span class="text-black">1</span>
						</div>
						<div
							class="flex justify-between w-full items-center border rounded px-3 py-1 bg-white sm:pr-6"
						>
							<input
								type="radio"
								name="rating"
								v-model="form.rating"
								value="2"
								class="cursor-pointer w-4 h-full"
							/><span class="text-black">2</span>
						</div>
						<div
							class="flex justify-between w-full items-center border rounded px-3 py-1 bg-white sm:pr-6"
						>
							<input
								type="radio"
								name="rating"
								v-model="form.rating"
								value="3"
								class="cursor-pointer w-4 h-full"
							/><span class="text-black">3</span>
						</div>
						<div
							class="flex justify-between w-full items-center border rounded px-3 py-1 bg-white sm:pr-6"
						>
							<input
								type="radio"
								name="rating"
								v-model="form.rating"
								value="4"
								class="cursor-pointer w-4 h-full"
							/><span class="text-black">4</span>
						</div>
						<div
							class="flex justify-between w-full items-center border rounded px-3 py-1 bg-white sm:pr-6"
						>
							<input
								type="radio"
								name="rating"
								v-model="form.rating"
								value="5"
								class="cursor-pointer w-4 h-full"
							/><span class="text-black">5</span>
						</div>
					</div>
				</li>

				<hr class="py-3" />

				<FormInput
					:type="'textarea'"
					placeholder="Deine Eingabe..."
					v-model="form.improvement"
				>
					<template v-slot:label>
						Was haben wir gut gemacht und was könnten wir
						verbessern? *
					</template>
				</FormInput>

				<hr class="py-3" />

				<FormInput
					:type="'textarea'"
					placeholder="Deine Eingabe..."
					v-model="form.participants"
				>
					<template v-slot:label>
						Welche anderen Organisationen sollten an der nächsten
						match:make teilnehmen? *
					</template>
				</FormInput>

				<hr class="py-3" />

				<FormInput
					:type="'textarea'"
					placeholder="Deine Eingabe..."
					v-model="form.remark"
				>
					<template v-slot:label>
						Hast du weitere Anmerkungen?
					</template>
				</FormInput>
			</ul>

			<button
				type="submit"
				:disabled="!isFormValid"
				class="float-right justify-end text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25 disabled:cursor-not-allowed"
			>
				Absenden
			</button>
		</form>
	</div>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
	name: "matchmake-survey",
	components: {
		FormInput,
	},
	props: {
		reset: Boolean,
		complete: Boolean,
	},
	watch: {
		reset(newVal) {
			if (newVal) {
				this.resetForm();
				this.$emit("resetComplete");
			}
		},
		complete(newVal) {
			if (newVal === true) {
				this.resetForm();
				this.$emit("finish");
			}
		},
	},
	data() {
		return {
			form: {
				rating: null,
				improvement: "",
				participants: "",
				remark: "",
			},
			sent: false,
			status: {
				text: "",
				type: "",
			},
			showModal: false,
		};
	},
	computed: {
		isFormValid() {
			if (
				this.form.rating &&
				this.form.improvement &&
				this.form.participants
			) {
				return true;
			}

			return false;
		},
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							data[key]
						)}`
				)
				.join("&");
		},
		handleSubmit() {
			fetch("/survey.html", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: this.encode({
					"form-name": "machtmake-survey",
					...this.form,
				}),
			}).then(() => {
				this.sent = true;

				this.showModal = true;

				this.status = {
					text: "Danke vielmals, dass du an der kurzen Umfrage teilgenommen hast.<br />Weiterhin einen schönen Tag!",
					type: "success",
				};

				this.$emit("updateShowModal", this.showModal);
				this.$emit("updateModalText", this.status.text);
			});
		},

		resetForm() {
			this.status = {
				text: "",
				type: "",
			};

			this.form = {
				rating: null,
				improvement: "",
				participants: "",
				remark: "",
			};

			this.sent = false;
		},
	},
};
</script>
