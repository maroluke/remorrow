<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'markus-spiske-sFydXGrt5OA-unsplash.jpg'">
			<template #title>Wer wir sind </template>

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
				:button="'Kontakt'"
				:icon="'mail'"
				:contact="true"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Wir tun dies...</template>

				<template #paragraph>
					... auf unsere Weise und suchen nach einem eigenen Weg.
					Nebst dem, dass wir uns als Kollektiv verstehen und eine
					<strong class="font-bold"
						>Community rundum nachhaltige Ideen und Projekte</strong
					>
					aufbauen, gibt es natürlich immer treibende Kräfte.
					<br /><br />
					<!-- Bei uns sind das <a href="#" class="glossar-link font-bold">Marko</a> und <a href="#" class="glossar-link font-bold">Sirik</a>. -->
					Bei uns sind das <strong class="font-bold">Marko</strong> und
					<strong class="font-bold">Sirik</strong>.
					<br /><br />
					Du willst uns kennenlernen? Für einen Schwatz sind wir immer
					zu haben!
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Wir bauen eine Community'"
				:link="'/community'"
				:icon="'community'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Der Garten.</template>

				<template #paragraph>
					Die Analogie des Gartens mögen wir gern. Ein Garten voller
					Pflanzen in all ihren Wachstumsstadien. Ein Garten, der
					darum bemüht ist, den idealen Boden für gesundes Wachstum
					von neuen, nachhaltigen und
					<RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#zukunftsorientiert' }">zukunftsorientierten</RouterLink>
					Projekten herzustellen. <br /><br />
					Egal ob diese gerade erst keimen oder bereits kleine
					Pflänzchen sind. Wir schaffen die individuellen
					Voraussetzungen die es braucht, damit starke Pflanzen
					wurzeln können.
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="text-dark px-5 py-10 bg-snow md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:button="'Wir fördern Projekte'"
				:link="'/projekte'"
				:icon="'project'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Die Projekte.</template>

				<template #paragraph>
					Alle Projekte bei re:morrow haben einen klaren,
					nachhaltigen Bezug – das ist uns besonders wichtig. Aus
					ökologischer Sicht sind sie so bspw.
					<RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#klimaneutral' }">klimaneutral</RouterLink>/<RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#klimapositiv' }">klimapositiv</RouterLink>, <RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#regenerativ' }">regenerativ</RouterLink> oder
					unterwegs dahin. Wir stellen diesen Bezug sicher und
					unterstützen die Projekte aktiv auf diesem Weg. <br /><br />
					So streben wir gemeinsam ein besseres Morgen an. Für uns
					zählt jede Pflanze, die eine positive Wirkung auf unsere
					Zukunft hat.
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Mehr erfahren'"
				:link="'/unser-weg'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title> Entdecke das Warum. </template>

				<template #paragraph>
					Lerne unseren Purpose, unsere Ziele und die dahinterliegende
					Vision kennen.
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
