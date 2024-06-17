<template>
	<div class="matchmake-form">
		<form method="post" @submit.prevent="handleSubmit">
			<input
				type="hidden"
				name="form-name"
				value="machtmake-registration"
			/>
			<ul class="flex flex-col">
				<FormInput
					type="text"
					placeholder="Unternehmen"
					v-model="form.company"
				>
					<template v-slot:label>
						Mit welchem Unternehmen (Startup oder Business Partner)
						nimmst du an der match:make 2024 teil?
					</template>

					<template v-slot:description>
						Achte auf die korrekte Bezeichnung. Wir verwenden diese
						z.B. für dein Namensschild.
					</template>
				</FormInput>

				<FormInput type="text" placeholder="Name" v-model="form.name">
					<template v-slot:label> Name (Vor- und Nachname) </template>
				</FormInput>

				<FormInput
					type="text"
					placeholder="Position"
					v-model="form.position"
				>
					<template v-slot:label> Positionsbezeichnung </template>
				</FormInput>

				<FormInput
					type="email"
					placeholder="E-Mail"
					v-model="form.email"
				>
					<template v-slot:label>
						E-Mail Adresse für Event-Details
					</template>
				</FormInput>
			</ul>

			<button
				type="submit"
				:disabled="!isFormValid"
				class="float-right justify-end text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-25 disabled:cursor-not-allowed"
			>
				Abschliessen
			</button>
		</form>
	</div>
</template>

<script>
import FormInput from "./FormInput.vue";
export default {
	name: "matchmake-form",
	components: {
		FormInput,
	},
	props: {
		reset: Boolean,
	},
	watch: {
		reset(newVal) {
			if (newVal) {
				this.resetForm();
				this.$emit("resetComplete");
			}
		},
	},
	data() {
		return {
			form: {
				company: "",
				name: "",
				position: "",
				email: "",
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
				this.form.company &&
				this.form.name &&
				this.form.position &&
				this.validateEmail(this.form.email)
			) {
				return true;
			}

			return false;
		},
	},
	methods: {
		validateEmail(email) {
			var re =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		},
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
			fetch("/contact.html", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: this.encode({
					"form-name": "machtmake-registration",
					...this.form,
				}),
			}).then(() => {
				this.sent = true;

				this.showModal = true;

				this.status = {
					text: "Deine Registrierung ist bei uns eingegangen. Wir freuen uns auf deine Teilnahme.",
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
				company: "",
				name: "",
				position: "",
				email: "",
			};

			this.sent = false;
		},
	},
};
</script>
