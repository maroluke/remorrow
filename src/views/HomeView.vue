<script>
import TheIntro from "@components/TheIntro.vue";
import QuoteCard from "@components/QuoteCard.vue";
import ParagraphWithCards from "@components/ParagraphWithCards.vue";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import { defineComponent } from "vue";
import ContactModal from "@components/ContactModal.vue";

export default defineComponent({
	components: {
		TheIntro,
		QuoteCard,
		ParagraphWithCards,
		TitleParagraphItem,
		ContactModal,
	},
	data() {
		return {
			loading: false,
			cmsData: [],
			error: null,
		};
	},
	async mounted() {
		this.error = this.cmsData = null;
		this.loading = true;
		// use route params to build the API endpoint URL
		const url = `/api/notion`;
		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.cmsData =
					data.results[0].properties.Content.rich_text[0].plain_text;
				console.log(data.results);
			})
			.catch((error) => {
				this.error = error.toString();
				console.log(this.error);
			})
			.finally(() => {
				this.loading = false;
			});
	},
	// async mounted() {
	//     this.error = this.cmsData = null
	//     this.loading = true
	//     // use route params to build the API endpoint URL
	//     const url = '/api/notion'
	//     const response = await fetch(url).then(res => res.json())

	//     this.cmsData = response

	//     console.log(response)
	// },
});
</script>

<template>
	<form name="contact" method="POST" data-netlify="true" class="flex flex-col gap-5">
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
						<!-- <div>
							<label
								for="position"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Ich melde mich als:</label
							>
							<select
								id="position"
								name="role[]"
								multiple
								class="bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white"
							>
								<option value="single-person">interessierte Person</option>
								<option value="company">Unternehmen</option>
								<option value="association">Verein</option>
								<option value="ngo">NGO</option>
								<option value="willy-nilly">willy nilly</option>
							</select>
						</div> -->

						<!-- User E-mail -->
						<div>
							<label
								for="email"
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
									type="email"
									id="email"
									class="rounded-none rounded-r-lg border-none bg-white text-coal focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
									placeholder="maja.göpel@me.com"
								/>
							</div>
						</div>

						<!-- Modal footer -->
						<div class="flex items-center py-6 space-x-2 border-t rounded-b justify-between">
							<button
								type="submit"
								class="flex-1 text-snow bg-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Abschicken
							</button>
							<button
								type="button"
								class="modal-close flex-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
							>
								Abbrechen
							</button>
						</div>
					</form>
	<main class="bg-dark">
		<TheIntro :filename="'globe4.jpg'" :rotate="0" :bg-gradient="true" class="z-20">
			<template #title>
				Lass uns gemeinsam die Welt von Morgen schaffen.
			</template>

			<template #paragraph>
				Wir unterstützen
				nachhaltige Projekte dabei
				zu wachsen und einen
				positiven Beitrag für
				unsere Zukunft zu erbringen.
			</template>
		</TheIntro>

		<section class="px-5 py-10 bg-snow z-30 md:py-20 md:flex md:justify-center">
			<div class="flex flex-col items-center gap-10 justify-center md:flex-row md:max-w-screen-lg">
				<TitleParagraphItem class="text-coal md:basis-2/3 ">
					<template #title>
						Nachhaltigkeit ist nur ein erster Schritt – wir brauchen regenerative Ideen!
					</template>

					<template #paragraph>
						Als Kollektiv ist
						<span class="font-bold">fortomorrow</span>, mit begeisterten
						& motivierten Menschen, Teil der Veränderung. <br /><br />
						Weg von endlosem Streben nach Profit und unendlichem
						Wachstum, hin zu sinnvollen und
						<a href="#" class="glossar-link">schönen</a> Projekten, die
						ihre <a href="#" class="glossar-link">regenerative</a> Kraft
						entfesseln.
					</template>
				</TitleParagraphItem>

				<QuoteCard class="md:basis-1/3" />
			</div>
		</section>

		<section class="text-snow px-5 py-10 bg-dark z-20 flex flex-col items-center md:py-20">
			<TitleParagraphItem :button="'Unser Weg'" :to="'/unser-weg'" class="max-w-screen-md flex flex-col gap-10 !mb-0">
				<template #title>
					Wir wissen, dass wir zusammen stärker sind!
				</template>

				<template #paragraph>
					Gemeinsam arbeiten wir daran, Sinn & Zweck von Wirtschaft
					neu zu definieren und mit unserer Umwelt und Gesellschaft in
					Einklang zu bringen.
					<br /><br />
					Weshalb? Entdecke unseren Purpose, unsere Ziele und unsere
					Vision.
				</template>
			</TitleParagraphItem>
		</section>

		<ParagraphWithCards class="bg-snow text-coal px-5 py-10 z-20 md:py-20" />

		<section class="text-snow px-5 py-10 bg-dark z-20 flex flex-col items-center md:py-20">
			<TitleParagraphItem :button="'Melde dich'" class="max-w-screen-md flex flex-col gap-10 !mb-0">
				<template #title> Wohin die Reise führt. </template>

				<template #paragraph>
					Hey, wir brauchen nichts zu verstecken. Erfahre hier, wie
					unsere Roadmap aussieht. Ein Schritt nach dem anderen. So
					entwickeln wir fortomorrow, wachsen und schaffen Wachstum.
					<br /><br />
					Bist du Teil unseres nächsten Schritts und hast Bock
					mitzugestalten?
				</template>
			</TitleParagraphItem>
		</section>

		<section class="px-5 py-10 bg-snow text-coal z-20 flex flex-col items-center md:py-20">
			<TitleParagraphItem :button="'Entdecken'" :to="'/wer-wir-sind'" class="max-w-screen-md flex flex-col !mb-0">
				<template #title> Wer wir sind. </template>

				<template #paragraph>
					Bist du neugierig, wer und was hinter fortomorrow steckt?
					Erfahre mehr über die Menschen dahinter und unseren
					Blickwinkel.
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	
	<ContactModal />
</template>
