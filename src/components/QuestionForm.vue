<template>
	<div class="matchmake-form">
		<notification-container :status="status" />
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
						Mit welchem Unternehmen (Startup oder Business Partner) nimmst du an der match:make 2024 teil?
					</template>

					<template v-slot:description>
						Achte auf die korrekte Bezeichnung. Wir verwenden diese z.B. für dein Namensschild.
					</template>
				</FormInput>

				<FormInput
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                >
					<template v-slot:label>
						Name (Vor- und Nachname)
					</template>
				</FormInput>

				<FormInput
                    type="text"
                    placeholder="Position"
                    v-model="form.position"
                >
					<template v-slot:label>
						Positionsbezeichnung
					</template>
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
			
            <button type="submit" class="float-right justify-end text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Abschliessen</button>
		</form>
	</div>
</template>

<script>
import NotificationContainer from "./NotificationContainer.vue";
import FormInput from "./FormInput.vue";
export default {
	name: "matchmake-form",
	components: {
		NotificationContainer,
		FormInput,
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
			status: {},
		};
	},
	methods: {
		removeNotification() {
			this.sent = false;
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
		handleSubmit(e) {
			fetch("/contact.html", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: this.encode({
					"form-name": "machtmake-registration",
					...this.form,
				}),
			})
				.then(() => {
					this.$router.push("thanks");
				})
				.catch(() => {
					this.$router.push("404");
				});
		},
	},
};
</script>
