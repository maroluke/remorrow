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
				Bei fortomorrow steht eine zentrale Frage im Mittelpunkt unseres Denkens und Handelns:
			</template>
		</JumboHeader>

		<section class="px-5 py-10 bg-snow bg-no-repeat bg-cover">
			<!-- <div class="bg-rich-electric-blue py-10 px-20 mb-5 rounded-lg"> -->
				<h1 class="text-rich-electric-blue">Was brauchst du?</h1>
			<!-- </div> -->

			<TitleParagraphItem class="text-dark">
				<template #paragraph>
					Egal ob klein, mittel oder gross. Egal ob Startup, Nebenbeschäftigung, Hobby oder noch in der Ideenfindung. Wachstum
					braucht eine Basis, einen funktionierenden Nährboden, um zu gedeihen.
					<br /><br />
					Wir suchen nachhaltige Projekte und Unterfangen, an die wir glauben und die unseren Vorstellungen entsprechen. Sind
					diese identifiziert, möchten wir sie als Kollektiv unterstützen und aktiv Wachstum schaffen.
					<br /><br />
					Zu Beginn unserer Reise müssen wir flexibel sein und involvieren uns da, wo wir konkrete Möglichkeiten sehen.
					Perspektivisch möchten wir für diese Art von Projekten eine digitale Plattform aufbauen, um die Unterstützung
					effizienter, direkter und globaler auszubauen.
				</template>
			</TitleParagraphItem>

			<SquircleButton :icon="'direction'" :classes="'bg-coal text-rich-electric-blue'" :to="'/unser-weg#roadmap'" class="mt-5">
				<template #buttonRef>Entdecke unsere Roadmap</template>
			</SquircleButton>
		</section>

		<section class="px-5 py-10 bg-rich-electric-blue text-snow">
			<TitleParagraphItem>
				<template #title>
					Bock zu helfen?
				</template>
			</TitleParagraphItem>

			<ContactModal :classes="'text-rich-electric-blue bg-snow'">Sei ein Teil davon</ContactModal>
		</section>
	</main>
</template>
