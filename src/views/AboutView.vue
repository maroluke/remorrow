<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'markus-spiske-sFydXGrt5OA-unsplash.jpg'">
			<template #title>Wer wir sind </template>

			<template #paragraph>
				Hinter fortomorrow stehen Menschen, die sich aktiv für ein besseres Morgen einsetzen möchten und mit Begeisterung und
				Motivation gemeinsam einen Schritt weiter gehen wollen.
			</template>
		</JumboHeader>

		<section class="px-5 py-10 bg-snow">
			<TitleParagraphItem class="text-dark">
				<template #title>Wir tun dies...</template>

				<template #paragraph>
					... auf unsere Weise und versuchen einen eigenen Weg zu finden. Nebst dem, dass wir uns als Kollektiv verstehen und eine
					<strong class="font-extrabold">Community rundum nachhaltige Ideen und Projekte</strong> aufbauen wollen, gibt es natürlich immer treibende Kräfte.
					<br /><br />
					Bei uns sind das Marko und Sirik.
					<br /><br />
					Du willst uns kennenlernen? Für einen Schwatz sind wir immer zu haben!
				</template>
			</TitleParagraphItem>

			<SquircleButton :icon="'mail'" :classes="'bg-coal'" class="mt-5">
				<template #buttonRef>Kontakt</template>
			</SquircleButton>
		</section>

		<section class="text-snow px-5 py-10">
			<TitleParagraphItem>
				<template #title>Der Garten. </template>

				<template #paragraph>
					Die Analogie des Gartens mögen wir gern. Ein Garten voller Pflanzen in all ihren Wachstumsstadien. Ein Garten, der darum
					bemüht ist, den idealen Boden für gesundes Wachstum von neuen, nachhaltigen und <a href="#" class="glossar-link">zukunftsorientierten</a> Projekten
					herzustellen.
					<br /><br />
					Egal ob diese gerade erst keimen oder bereits kleine Pflänzchen sind. Wir versuchen die individuellen Voraussetzungen zu
					schaffen, die es braucht, damit starke Pflanzen wurzeln können.
				</template>
			</TitleParagraphItem>

			<SquircleButton :icon="'community'" :classes="'bg-coal'" :to="'/community'" class="mt-5">
				<template #buttonRef>Wir bauen eine Community</template>
			</SquircleButton>
		</section>

		<section class="text-dark px-5 py-10 bg-snow">
			<TitleParagraphItem>
				<template #title> Die Projekte. </template>

				<template #paragraph>
					Alle Projekte bei fortomorrow haben einen klaren, nachhaltigen Bezug – das ist uns besonders wichtig. Aus ökologischer
					Sicht sind sie so bspw. <a href="#" class="glossar-link">klimaneutral/klimapositiv</a>,
					<a href="#" class="glossar-link">regenerativ</a> oder unterwegs dahin. Wir stellen diesen Bezug sicher und
					unterstützen die Projekte aktiv auf diesem Weg.
					<br /><br />
					So streben wir gemeinsam ein besseres Morgen an. Für uns zählt jede Pflanze, die eine positive Wirkung auf unsere
					Zukunft hat.
				</template>
			</TitleParagraphItem>

			<SquircleButton :icon="'project'" :classes="'bg-coal'" :to="'/projekte'" class="mt-5">
				<template #buttonRef>Wir fördern Projekte</template>
			</SquircleButton>
		</section>

		<section class="text-snow px-5 py-10">
			<TitleParagraphItem>
				<template #title>
					Entdecke das Warum.
				</template>

				<template #paragraph>
					Lerne unseren Purpose, unsere Ziele und die dahinterliegende Vision kennen.
				</template>
			</TitleParagraphItem>

			<SquircleButton :classes="'bg-coal'" :to="'/unser-weg'" class="mt-5">
				<template #buttonRef>Mehr erfahren</template>
			</SquircleButton>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
