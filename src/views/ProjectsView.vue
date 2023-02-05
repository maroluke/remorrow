<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :class="'bg-bottom'" :src="'bogomil-mihaylov-EPdCJtYPrPE-unsplash.jpg'">
			<template #title>
				Wir fördern Projekte
			</template>

			<template #paragraph>
				Bei fortomorrow steht eine zentrale Frage im Mittelpunkt unseres Denkens und Handelns:
			</template>
		</JumboHeader>

		<section class="px-5 py-10 bg-snow bg-no-repeat bg-cover">
			<TitleParagraphItem class="text-dark">
				<template #title>
					<span class="text-7xl font-extrabold text-center">Was brauchst du?</span>
				</template>

				<template #paragraph>
					Egal ob klein, mittel oder gross. Egal ob Startup, Nebenbeschäftigung, Hobby oder noch in der Ideenfindung. Wachstum braucht eine Basis, einen funktionierenden Nährboden, um zu gedeihen.
					<br /><br />
					Wir suchen nachhaltige Projekte und Unterfangen, an die wir glauben und die unseren Vorstellungen entsprechen. Sind diese identifiziert, möchten wir sie als Kollektiv unterstützen und aktiv mithelfen, damit sie wachsen können.
					<br /><br />
					Zu Beginn unserer Reise geschieht dies noch eher opportunistisch und wir involvieren uns da, wo wir konkrete Möglichkeiten sehen. Perspektivisch möchten wir für diese Art von Projekten eine technische Plattform aufbauen, um die Unterstützung effizienter, direkter und globaler auszubauen.
				</template>
			</TitleParagraphItem>
		</section>

		<section class="px-5 py-10 bg-dark text-snow">
			<TitleParagraphItem>
				<template #title>
					Bock bei der Entwicklung mitzumachen?
				</template>
			</TitleParagraphItem>

			<SquircleButton 
				:icon="'mail'"
				:classes="'bg-rich-electric-blue text-snow'"
				class="mt-5"
			>
				Melde dich bei uns
			</SquircleButton>
		</section>
	</main>
</template>
