<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
import ContactModal from "@components/ContactModal.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader
			:class="'bg-bottom'"
			:src="'bogomil-mihaylov-EPdCJtYPrPE-unsplash.jpg'"
		>
			<template #title> Wir fördern Projekte </template>

			<template #paragraph>
				Bei fortomorrow steht eine zentrale Frage im Mittelpunkt unseres
				Denkens und Handelns:
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:flex md:justify-center md:p-20"
		>
			<!-- <div class="bg-rich-electric-blue py-10 px-20 mb-5 rounded-lg"> -->
			<!-- <h1 class="text-rich-electric-blue">Was brauchst du?</h1> -->
			<!-- </div> -->

			<TitleParagraphItem
				:button="'Entdecke unsere Roadmap'"
				:icon="'direction'"
				:classes="'bg-coal text-rich-electric-blue'"
				:link="'/unser-weg#roadmap'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title> Was brauchst du? </template>

				<template #paragraph>
					<p class="flex-1">
						Egal ob klein, mittel oder gross. Egal ob Startup,
						Nebenbeschäftigung, Hobby oder noch in der Ideenfindung.
						Wachstum braucht eine Basis, einen funktionierenden
						Nährboden, um zu gedeihen.
					</p>

					<p class="flex-1">
						Wir suchen nachhaltige Projekte und Unterfangen, an die
						wir glauben und die unseren Vorstellungen entsprechen.
						Sind diese identifiziert, unterstützen wir sie als
						Kollektiv und schaffen aktiv Wachstum.
					</p>

					<p class="flex-1">
						Zu Beginn unserer Reise sind wir flexibel und
						involvieren uns da, wo wir konkrete Möglichkeiten sehen.
						Perspektivisch bauen wir für diese Art von Projekten
						eine digitale Plattform auf, um die Unterstützung
						effizienter, direkter und globaler auszubauen.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 md:p-20 bg-[url('/sarah-lee-QURU8IY-RaI-unsplash.jpg')] bg-center bg-cover bg-no-repeat"
		>
			<!-- <div class="w-full h-full absolute top-0 left-0 z-0 bg-dark bg-opacity-5"></div> -->
			<TitleParagraphItem
				:button="'Sei ein Teil davon'"
				:icon="'mail'"
				:classes="'bg-snow !w-full modal-toggle'"
				class="gap-10 !mb-0 !items-start mx-auto drop-shadow-md max-w-screen-md"
			>
				<template #title> Bock zu helfen? </template>
			</TitleParagraphItem>
		</section>
	</main>

	<ContactModal />
</template>
