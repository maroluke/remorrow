<script>
import TheIntro from "@components/TheIntro.vue";
import QuoteCard from "@components/QuoteCard.vue";
import ParagraphWithCards from "@components/ParagraphWithCards.vue";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import SquircleButton from "@components/SquircleButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
	setup() {},
	components: {
		TheIntro,
		QuoteCard,
		ParagraphWithCards,
		TitleParagraphItem,
		SquircleButton,
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
	<main class="bg-dark">
		<TheIntro
			:filename="'sunrise-over-Earth_1600.jpg'"
			:rotate="180"
			:bg-gradient="true"
		>
			<template #title>
				Lass uns gemeinsam die Welt von Morgen schaffen.
			</template>

			<template #paragraph>
				Wir unterstützen nachhaltige Projekte dabei zu wachsen und einen
				positiven Beitrag für unsere Zukunft zu erbringen.
			</template>
		</TheIntro>

		<section class="px-5 py-10 bg-snow z-20">
			<TitleParagraphItem class="text-coal">
				<template #title>
					Nachhaltigkeit ist nur ein erster Schritt –
					<br />wir brauchen regenerative Ideen!
				</template>

				<template #paragraph>
					Als Kollektiv ist
					<span class="font-bold">fortomorrow</span>, mit begeisterten
					& motivierten Menschen, Teil der Veränderung. <br /><br />
					Weg von endlosem Streben nach Profit und unendlichem
					Wachstum, hin zu sinnvollen und schönen Projekten, die ihre
					regenerative Kraft entfesseln.
				</template>
			</TitleParagraphItem>
		</section>

		<QuoteCard class="px-2" />

		<section class="text-snow px-5 py-10">
			<TitleParagraphItem>
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

			<SquircleButton
				:icon="'direction'"
				:classes="'bg-coal'"
				:to="'/unser-weg'"
				class="mt-5"
			>
                <template #buttonRef>Unser Weg</template>
			</SquircleButton>
		</section>

		<ParagraphWithCards class="bg-snow text-coal px-5 py-10" />

		<section class="px-5 py-10">
			<TitleParagraphItem>
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

			<SquircleButton
				:icon="'mail'"
				:classes="'bg-coal'"
				:to="'#'"
				class="mt-5"
			>
				<template #buttonRef>Melde dich</template>
			</SquircleButton>
		</section>

		<section class="px-5 py-10 bg-snow text-coal">
			<TitleParagraphItem>
				<template #title> Wer wir sind. </template>

				<template #paragraph>
					Bist du neugierig, wer und was hinter fortomorrow steckt?
					Erfahre mehr über die Menschen dahinter und unseren
					Blickwinkel.
				</template>
			</TitleParagraphItem>

			<SquircleButton
				:icon="'about'"
				:classes="'bg-coal'"
				:to="'/wer-wir-sind'"
				class="mt-5"
			>
				<template #buttonRef>Entdecken</template>
			</SquircleButton>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
