<script>
import TheIntro from "@components/TheIntro.vue";
import QuoteCard from "@components/QuoteCard.vue";
import ParagraphWithCards from "@components/ParagraphWithCards.vue";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		TheIntro,
		QuoteCard,
		ParagraphWithCards,
		TitleParagraphItem,
	},
	data() {
		return {
			loading: false,
			cmsData: [],
			error: null,
			form: {
				email: "",
			},
		};
	},
	methods: {
		async handleSubmit() {
			const formData = new FormData();
			formData.append("form-name", "contact");
			formData.append("email", this.form.email);

			try {
				await fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formData).toString(),
				});
				// Form submitted successfully
				// You can clear the form or show a success message
				this.form.email = "";
			} catch (error) {
				// Error handling
			}
		},
	},
});
</script>

<template>
	<main class="bg-dark">
		<TheIntro
			:filename="'globe.png'"
			:rotate="0"
			:bg-gradient="true"
			class="z-20"
		>
			<template #title>
				Lass uns gemeinsam die Welt von Morgen schaffen.
			</template>

			<template #paragraph>
				Wir unterstützen nachhaltige Projekte dabei zu wachsen und einen
				positiven Beitrag für unsere Zukunft zu erbringen.
			</template>
		</TheIntro>

		<section
			class="px-5 py-10 bg-snow z-30 md:py-20 md:flex md:justify-center"
		>
			<div
				class="flex flex-col items-center gap-10 justify-center md:flex-row md:max-w-screen-lg"
			>
				<TitleParagraphItem class="text-coal md:basis-2/3">
					<template #title>
						Nachhaltigkeit ist nur ein erster Schritt – wir brauchen
						regenerative Ideen!
					</template>

					<template #paragraph>
						<p>
							Als Kollektiv ist
							<span class="font-bold">re:morrow</span>, mit
							begeisterten & motivierten Menschen, Teil der
							Veränderung. <br /><br />
							Weg von endlosem Streben nach Profit und unendlichem
							Wachstum, hin zu sinnvollen Projekten, die ihre
							<RouterLink
								class="glossar-link"
								:to="{
									path: `/glossar/`,
									hash: `#regenerativ`,
								}"
								>regenerative</RouterLink
							>
							Kraft entfesseln.
						</p>
					</template>
				</TitleParagraphItem>

				<QuoteCard class="md:basis-1/3" />
			</div>
		</section>

		<section
			class="text-snow px-5 py-10 bg-dark z-20 flex flex-col items-center md:py-20"
		>
			<TitleParagraphItem
				:button="'Unser Weg'"
				:link="'/unser-weg'"
				class="max-w-screen-md flex flex-col gap-10 !mb-0"
			>
				<template #title>
					Wir wissen, dass wir zusammen stärker sind!
				</template>

				<template #paragraph>
					<p>
						Wir leisten einen Beitrag für ein besseres Morgen – und
						wenn wir das gemeinsam tun, ist dieser nur noch grösser!
						Dafür finden wir die guten Ideen und unterstützen deren
						Wachstum. Jeder von uns hat Stärken, die er dafür
						einsetzen kann.
						<br /><br />
						Als Individuum kann man stark sein, aber als Kollektiv,
						sind wir Teil der Veränderung.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<ParagraphWithCards
			class="bg-snow text-coal px-5 py-10 z-20 md:py-20"
		/>

		<section
			class="text-snow px-5 py-10 bg-dark z-20 flex flex-col items-center md:py-20"
		>
			<TitleParagraphItem
				:button="'Melde dich'"
				:contact="true"
				class="max-w-screen-md flex flex-col gap-10 !mb-0 modal-toggle"
			>
				<template #title> Wohin die Reise führt. </template>

				<template #paragraph>
					<p>
						Hey, wir brauchen nichts zu verstecken. Erfahre hier,
						wie unsere Roadmap aussieht. Ein Schritt nach dem
						anderen. So entwickeln wir re:morrow, wachsen und
						schaffen Wachstum.
						<br /><br />
						Bist du Teil unseres nächsten Schritts und hast Bock
						mitzugestalten?
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="text-snow px-5 py-10 bg-snow z-20 flex flex-col items-center md:py-20"
		>
			<form
				name="contact"
				data-netlify="true"
				@submit.prevent="handleSubmit"
			>
				<p>
					<label
						>Your Email:
						<input v-model="form.email" type="email" name="email"
					/></label>
				</p>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</section>

		<section
			class="px-5 py-10 bg-snow text-coal z-20 flex flex-col gap-10 items-center md:py-20"
		>
			<TitleParagraphItem
				:link="'/wer-wir-sind'"
				class="max-w-screen-md flex flex-col !mb-0"
			>
				<template #title>Besser gemeinsam wachsen</template>

				<template #paragraph>
					<p>
						Uns sind nicht nur Verbindungen zwischen Menschen,
						sondern auch Partnerschaften zwischen Organisationen
						wichtig. Sie ermöglichen stärkeren Austausch,
						Zusammenhalt und eine gegenseitige Unterstützung, was
						uns kollektiv voranbringt. Die nachfolgenden
						Partner-Organisationen begleiten & unterstützen uns.
					</p>
				</template>
			</TitleParagraphItem>

			<div class="w-32 h-32 flex justify-center items-center relative">
				<div
					class="w-full h-full bg-gray-200 opacity-40 rounded-full scale-75 absolute left-0 right-0 top-0 bottom-0 translate-x-32"
				></div>
				<div
					class="w-full h-full bg-gray-200 opacity-40 rounded-full scale-75 absolute left-0 right-0 top-0 bottom-0 -translate-x-32"
				></div>
				<div
					class="w-full h-full bg-gray-300 opacity-40 rounded-full scale-90 absolute left-0 right-0 top-0 bottom-0 translate-x-16"
				></div>
				<div
					class="w-full h-full bg-gray-300 opacity-40 rounded-full scale-90 absolute left-0 right-0 top-0 bottom-0 -translate-x-16"
				></div>

				<a
					href="https://www.one-planet-lab.ch"
					target="_blank"
					class="relative flex items-stretch w-full h-full"
				>
					<img
						src="@assets/media/one-planet-lab.png"
						alt="Partner"
						class="w-full h-full rounded-full object-contain shadow-none scale-100 transition-all duration-300 ease-[cubic-bezier(cubic-bezier(0.85, 0, 0.15, 1)] hover:shadow-xl hover:scale-105"
					/>
				</a>
			</div>
		</section>
	</main>
</template>
