<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'marissa-rodriguez-p7iBrf9I9iE-unsplash.jpg'">
			<template #title>Events</template>

			<template #paragraph>
				Mit punktuellen Events wollen wir die Unterstützung von nachhaltigen Projekten & Startups greifbar machen.
				<br /><br />
				Für 2024 arbeiten wir an einem Event-Format namens <strong class="text-bold">match:make</strong>.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>
					Ziel & Hintergrund
				</template>

				<template #paragraph>
					Die match:make ist ein physisches Event-Format um nachhaltige Startups, die unser Scoring durchlaufen haben und in irgendeiner Form Unterstützung benötigen, mit Unternehmen oder Organisationen zusammenzubringen, die diese anbieten können. 
					<br /><br />
					Das Format findet im September dieses Jahres gemeinsam mit <a class="glossar-link" target="_blank" href="https://aws.amazon.com/de/local/switzerland/">AWS Schweiz (Amazon Web Services)</a> in Zürich statt. Die Veranstaltung wird in geschlossenem Rahmen, d.h. basierend auf Einladungen, durchgeführt.
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Let\'s talk'"
				:contact="true"
				:icon="'mail'"
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>More to come.</template>

				<template #paragraph>
					Wir arbeiten aktuell daran. Sobald es mehr zu erzählen gibt, wirst du es hier lesen können. Hast du zwischenzeitlich Fragen an uns oder – noch besser – willst <strong>als Hero oder Pioneer selbst mitgestalten?</strong>
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
