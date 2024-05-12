<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
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
				:button="'Kontakt'"
				:icon="'mail'"
				:contact="true"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title>Eigener Weg.</template>

				<template #paragraph>
					<p>
						<p>Wir arbeiten kollektiv am Aufbau von re:morrow und suchen dabei unseren eigenen Weg.</p>
						<p>Perspektivisch bauen wir eine digitale und globale Plattform zur Unterstützung von nachhaltigen <RouterLink class="glossar-link" to="/projekte/">Ideen, Projekten und Startups</RouterLink> auf. Gleichzeitig entwickeln wir <strong>eine <RouterLink class="glossar-link" to="/community/">Community</RouterLink> mit Menschen, die Ideen mit positiver Wirkung aktiv unterstützen</strong>.</p>
						<div class="flex gap-5 mb-5 items-center justify-between">
							<p class="mb-0 flex-1">Die treibenden Kräfte bei uns sind <strong>Sirik</strong> und <strong>Marko</strong>.</p>
							<div class="flex-1 flex justify-end">
								<img src="@/assets/media/profile-sirik.jpg" alt="Sirik Loosman" class="-rotate-3 mt-10 z-20 block rounded-full w-24 h-24 object-cover border-4 border-white md:w-32 md:h-32" />
								<img src="@/assets/media/profile-marko.jpg" alt="Marko Lukac" class="rotate-6 -ml-5 z-10 block rounded-full w-24 h-24 object-cover border-4 border-white md:w-32 md:h-32" />
							</div>
						</div>
						<p>Du willst uns kennenlernen? Für einen Schwatz sind wir immer zu haben!</p>
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Wir bauen eine Community'"
				:link="'/community'"
				:icon="'community'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title>Der Garten.</template>

				<template #paragraph>
					<p>
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
					</p>
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
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title>Die Projekte.</template>

				<template #paragraph>
					<p>
						Alle Projekte bei re:morrow haben einen klaren,
						nachhaltigen Bezug – das ist uns besonders wichtig. Aus
						ökologischer Sicht sind sie so bspw.
						<RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#klimaneutral' }">klimaneutral</RouterLink>/<RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#klimapositiv' }">klimapositiv</RouterLink>, <RouterLink class="glossar-link" :to="{ path: '/glossar/', hash: '#regenerativ' }">regenerativ</RouterLink> oder
						unterwegs dahin. Wir stellen diesen Bezug sicher und
						unterstützen die Projekte aktiv auf diesem Weg. <br /><br />
						So streben wir gemeinsam ein besseres Morgen an. Für uns
						zählt jede Pflanze, die eine positive Wirkung auf unsere
						Zukunft hat.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Mehr erfahren'"
				:link="'/unser-weg'"
				:classes="'bg-coal w-full'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-sm"
			>
				<template #title> Entdecke das Warum. </template>

				<template #paragraph>
					<p>
						Lerne unseren Purpose, unsere Ziele und die dahinterliegende
						Vision kennen.
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
