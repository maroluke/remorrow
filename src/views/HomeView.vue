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
		};
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
						Wir leben in einer Zeit grosser Herausforderungen für
						unseren Planeten, unsere Gesellschaft und unsere
						Lebensgrundlagen.
					</template>

					<template #paragraph>
						<p>
							Die Probleme sind allgegenwärtig, komplex und
							dominieren oftmals die Negativschlagzeilen der
							Medien. Klimawandel, Verlust der Biodiversität,
							demografischer Wandel und die dramatische
							Veränderung unserer Lebensgrundlagen – die Liste der
							Herausforderungen ist lang.
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
				class="max-w-screen-md flex flex-col gap-10 !mb-0 modal-toggle"
			>
				<template #title> Es gibt Hoffnung! </template>

				<template #paragraph>
					<p>
						Und viele gute Gründe, den Kopf nicht in den Sand zu
						stecken. Positive Ideen spriessen immer schneller, und
						die Lösungen, die wir für den notwendigen Wandel
						brauchen, sind bereits da. Als Gemeinschaft müssen wir
						nicht auf einen zukünftigen Quantensprung warten – denn
						die nötigen Lösungsbausteine existieren bereits.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<ParagraphWithCards
			class="bg-snow text-coal px-5 py-10 z-20 md:py-20"
		/>

		<section
			class="px-5 py-10 bg-dark text-snow z-20 flex flex-col gap-10 items-center md:py-20"
		>
			<TitleParagraphItem
				:link="'/wer-wir-sind'"
				class="max-w-screen-md flex flex-col !mb-0"
			>
				<template #title>Besser gemeinsam wachsen!</template>

				<template #paragraph>
					<p>
						Unsere heutige Welt ist komplex und facettenreich. Aus
						diesem Grund freuen wir uns, auch mit unterschiedlichen
						Organisationen und Unternehmen partnerschaftlich
						zusammenzuarbeiten.
					</p>
				</template>
			</TitleParagraphItem>

			<div class="w-32 h-32 flex justify-center items-center relative">
				<div
					class="w-full h-full bg-stone-700 rounded-full scale-75 absolute left-0 right-0 top-0 bottom-0 translate-x-32"
				></div>
				<div
					class="w-full h-full bg-stone-700 rounded-full scale-75 absolute left-0 right-0 top-0 bottom-0 -translate-x-32"
				></div>
				<div
					class="w-full h-full bg-stone-800 rounded-full scale-90 absolute left-0 right-0 top-0 bottom-0 translate-x-16"
				></div>
				<div
					class="w-full h-full bg-stone-800 rounded-full scale-90 absolute left-0 right-0 top-0 bottom-0 -translate-x-16"
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

		<section
			class="text-coal px-5 py-10 bg-snow z-20 flex flex-col items-center md:py-20"
		>
			<TitleParagraphItem
				:button="'Melde dich'"
				:contact="true"
				class="max-w-screen-md flex flex-col gap-10 !mb-0 modal-toggle"
			>
				<template #title>Wo unsere Reise hinführt?</template>

				<template #paragraph>
					<p>
						Hey, wir brauchen nichts zu verstecken. Erfahre hier,
						wie unsere Roadmap (Link) aussieht. Wir machen einen
						Schritt nach dem anderen und wachsen mit re:morrow in
						Richtung unserer Vision.
						<br /><br />
						Lust, auch dabei zu sein? Melde dich – um die Welt zu
						verändern, brauchen wir noch ein paar Hände.
					</p>
				</template>
			</TitleParagraphItem>
		</section>
	</main>
</template>
