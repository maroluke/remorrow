<script>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		TitleParagraphItem,
		JumboHeader,
	},
	methods: {
		markText(id, event) {
			// get the element where this function was triggered
			const eventTarget = event.target;

			const element = document.getElementById(id);

			// if the element has the class "mark" already, do nothing
			if (element.classList.contains("mark")) {
				return;
			} else {
				// remove the class "mark" from all elements
				document.querySelectorAll(".mark").forEach((element) => {
					element.classList.remove("mark");
				});

				// add the class "mark" to the element
				element.classList.add("mark");
				eventTarget.classList.add("mark");
			}
		},

		demarkText() {
			document.querySelectorAll(".mark").forEach((element) => {
				element.classList.remove("mark");
			});
		},
	},
});
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'markus-spiske-sFydXGrt5OA-unsplash.jpg'">
			<template #title>Wer wir sind</template>

			<template #paragraph>
				Hinter re:morrow stehen Menschen, die sich aktiv für ein
				besseres Morgen einsetzen und mit Begeisterung und Motivation
				gemeinsam einen Schritt weiter gehen.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:py-20 md:text-snow"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Das sind wir.</template>

				<template #paragraph>
					<p>
						Wir arbeiten kollektiv am Aufbau von re:morrow und
						suchen dabei unseren eigenen Weg. Das Kernteam setzt
						sich aus den folgenden Menschen zusammen, die darin
						wirken:
					</p>

					<div
						class="flex flex-col gap-5 mb-5 items-center justify-between sm:gap-0"
					>
						<div
							class="flex flex-col gap-5 border-b border-stone-300 py-5 sm:border-stone-700 sm:flex-row"
						>
							<div
								class="flex items-center gap-5 justify-between sm:flex-col sm:justify-start sm:min-w-64 sm:items-start"
							>
								<h3>Sirik Loosman</h3>
								<img
									src="@/assets/media/profile-sirik.jpg"
									alt="Sirik Loosman"
									class="transition-all duration-300 block rounded-full w-24 h-24 object-cover border-4 border-rich-electric-blue md:w-32 md:h-32"
								/>
							</div>

							<p>
								<strong
									id="sirik"
									class="transition-all duration-300"
									>Sirik</strong
								>
								hat re:morrow mit Marko gegründet und ist eine
								treibende Kraft überall da, wo es gerade
								notwendig ist – ob Social Media, App, Scoring
								oder Strategieentwicklung. Wenn's viel wird,
								hält er die Fäden zusammen.
							</p>
						</div>

						<div
							class="flex flex-col gap-5 border-b border-stone-300 py-5 sm:border-stone-700 sm:flex-row"
						>
							<div
								class="flex items-center gap-5 justify-between sm:flex-col sm:justify-start sm:min-w-64 sm:items-start"
							>
								<h3>Marko Lukac</h3>
								<img
									src="@/assets/media/profile-marko.jpg"
									alt="Marko Lukac"
									class="transition-all duration-300 block rounded-full w-24 h-24 object-cover border-4 border-rich-electric-blue md:w-32 md:h-32"
								/>
							</div>

							<p>
								<strong
									id="marko"
									class="transition-all duration-300"
									>Marko</strong
								>
								verantwortet unseren gesamten digitalen Auftritt
								inkl. Infrastruktur und Tools. Gleichzeitig
								entwickelt er mit Matthias die App und sorgt
								dabei für ein reibungsloses Nutzererlebnis.
							</p>
						</div>

						<div
							class="flex flex-col gap-5 border-b border-stone-300 py-5 sm:border-stone-700 sm:flex-row"
						>
							<div
								class="flex items-center gap-5 justify-between sm:flex-col sm:justify-start sm:min-w-64 sm:items-start"
							>
								<h3>Matthias Fuhrimann</h3>
								<img
									src="@/assets/media/profile-matthias.jpg"
									alt="Matthias Fuhrimann"
									class="transition-all duration-300 block rounded-full w-24 h-24 object-cover border-4 border-rich-electric-blue md:w-32 md:h-32"
								/>
							</div>

							<p>
								<strong
									id="matthias"
									class="transition-all duration-300"
									>Matthias</strong
								>
								ist vielseitiger Allrounder mit breitem
								technischem Hintergrund und verantwortet unser
								Social Media Game. Mit Marko kümmert er sich um
								den Aufbau der digitalen App und trägt mit
								seinem kritischen Feedback allgemein zur
								Optimierung bei.
							</p>
						</div>

						<div class="flex flex-col gap-5 py-5 sm:flex-row">
							<div
								class="flex items-center gap-5 justify-between sm:flex-col sm:justify-start sm:min-w-64 sm:items-start"
							>
								<h3>Henri zur Nieden</h3>
								<img
									src="@/assets/media/profile-henri.jpg"
									alt="Henri zur Nieden"
									class="transition-all duration-300 block rounded-full w-24 h-24 object-cover border-4 border-rich-electric-blue md:w-32 md:h-32"
								/>
							</div>

							<p>
								<strong
									id="henri"
									class="transition-all duration-300"
									>Henri</strong
								>
								verantwortet unser holistisches Scoring sowie
								dessen Weiterentwicklung. Mit seiner Expertise
								im Nachhaltigkeitsbereich stellt er sicher, dass
								unsere Richtung stimmt und wir den Fokus bei
								unseren begleiteten Projekten richtig setzen.
							</p>
						</div>
					</div>
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title>Der Garten.</template>

				<template #paragraph>
					<p>
						Die Analogie des Gartens mögen wir gern. Ein Garten
						voller Pflanzen in all ihren Wachstumsstadien. Ein
						Garten, der darum bemüht ist, den idealen Boden für
						gesundes Wachstum von neuen, nachhaltigen und
						<RouterLink
							class="glossar-link"
							:to="{
								path: '/glossar/',
								hash: '#zukunftsorientiert',
							}"
							>zukunftsorientierten</RouterLink
						>
						Projekten herzustellen. <br /><br />
						Egal ob diese gerade erst keimen oder bereits kleine
						Pflänzchen sind. Wir schaffen die individuellen
						Voraussetzungen die es braucht, damit starke Pflanzen
						wurzeln können.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="text-coal px-5 py-10 bg-snow md:py-20 md:bg-dark md:text-snow"
		>
			<TitleParagraphItem
				:button="'Mehr erfahren'"
				:link="'/unser-weg'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title> Entdecke das Warum. </template>

				<template #paragraph>
					<p>
						Lerne unseren Purpose, unsere Ziele und die
						dahinterliegende Vision kennen.
					</p>
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>

<style scoped>
.mark {
	@apply text-rich-electric-blue inline-block;
}

img.mark {
	@apply border-rich-electric-blue z-30;
}
</style>
