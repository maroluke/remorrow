<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import IconChecked2 from "@components/icons/IconChecked2.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'mykhailo-kopyt-lS2rJhjhC1o-unsplash.jpg'">
			<template #title>Unser Weg </template>

			<template #paragraph>
				Unsere Pläne sind gross, wir haben jede Menge Ideen und müssen
				uns immer wieder neu fokussieren. Doch dahinter steckt 100%
				Motivation und die Überzeugung, dass wir gemeinsam mehr
				erreichen können.
			</template>
		</JumboHeader>

		<section
			id="vision"
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20 flex justify-center"
		>
			<div
				class="flex flex-col gap-10 mb-0 items-center justify-center max-w-screen-sm"
			>
				<TitleParagraphItem>
					<template #title>Vision </template>

					<template #paragraph>
						<p>
							<strong
								>Ein besseres Morgen für Mensch und Planet, in
								dem Hoffnung, Inspiration und Begeisterung
								gegenwärtig ist und Mut für Veränderung macht.
							</strong>
							<br /><br />
							Wir sehen re:morrow als globale Plattform und Raum,
							um die richtigen Menschen zusammenzubringen und zu
							verbinden. Die Menschen, die aktiv mitgestalten und
							jene, die positive Ideen vorantreiben.
							<br /><br />
							So schaffen wir eine Basis für kollaboratives
							Wirken, die Lösung von Problemen und mehr Hoffnung
							in eine bessere Zukunft für alle.
						</p>
					</template>
				</TitleParagraphItem>
			</div>
		</section>

		<section
			id="purpose"
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-dark md:py-20 flex justify-center"
		>
			<div
				class="flex flex-col gap-10 mb-0 items-center justify-center max-w-screen-sm"
			>
				<TitleParagraphItem>
					<template #title>Purpose </template>

					<template #paragraph>
						<p>
							<strong>Kurz gesagt:</strong> Wir wollen eine
							hoffnungsvolle und inspirierende Zukunft. Wir tragen
							unseren Teil dazu bei, indem wir nachhaltige Ideen
							mit positiver Wirkung finden, stärken und
							verbreiten.
						</p>
					</template>
				</TitleParagraphItem>

				<div class="my-5 drop-shadow">
					<img
						loading="lazy"
						class="object-contain rounded-lg md:rounded-xl"
						src="@assets/media/the-loop-approach.jpg"
						alt="Purpose"
					/>
					<p class="text-moon text-sm mt-1 px-3">
						Quelle: The Loop Approach (Buch, TheDive)
					</p>
				</div>

				<TitleParagraphItem>
					<template #paragraph>
						<p>
							Mit diesem Gedankengut sind wir – ziemlich sicher –
							nicht alleine. Diejenigen, die sie teilen, scharen
							wir um uns – das sind Menschen der
							re:morrow-Community. Wir möchten den Wandel
							antreiben, Menschen auf dem Weg begeistern und
							Hoffnung spenden.
						</p>
					</template>
				</TitleParagraphItem>
			</div>
		</section>

		<section
			id="roadmap"
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20 flex justify-center"
		>
			<div
				class="flex flex-col gap-10 mb-0 items-center justify-center max-w-screen-sm xl:max-w-none xl:flex-row xl:items-start xl:gap-20"
			>
				<TitleParagraphItem class="basis-1/3">
					<template #title>Die Roadmap </template>

					<template #paragraph>
						<p>
							In erster Linie wollen wir organisch wachsen.
							Gemeinsam mit Menschen, die sich ebenfalls für den
							Weg begeistern und mit Unternehmen & Organisationen
							an der Seite, die verändern wollen.
							<br /><br />
							Entlang unserer Strategie verfolgen wir diese
							Meilensteine.
						</p>
					</template>
				</TitleParagraphItem>

				<div
					class="grid grid-cols-1 gap-2 w-full max-w-screen-sm basis-2/3"
				>
					<TitleParagraphItem
						:heading="3"
						:icon="'norming'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal pb-5 md:text-snow"
					>
						<template #title>2022 - Norming & Storming </template>

						<template #paragraph>
							<ul class="list">
								<li class="!bg-green-400">
									<span>
										Purpose, Vision, Idee und zentrale
										Konzepte
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span> Repräsentation und Branding </span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
							</ul>
						</template>
					</TitleParagraphItem>

					<TitleParagraphItem
						:heading="3"
						:icon="'planed'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal py-5 md:text-snow"
					>
						<template #title>2023 - Seeding </template>

						<template #paragraph>
							<ul class="list">
								<li class="!bg-green-400">
									<span>
										Launch Webseite, Social Media und
										Kommunikation
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Entwicklung des holistischen Scorings
										V1/2 und initialer Strategie
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
							</ul>
						</template>
					</TitleParagraphItem>

					<TitleParagraphItem
						:heading="3"
						:icon="'world'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal py-5 md:text-snow"
					>
						<template #title>2024 - Into the wild </template>

						<template #paragraph>
							<ul class="list">
								<li class="!bg-green-400">
									<span>
										Onboarding erster Startups via Scoring
										V2
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span> Initiales Partner-Netzwerk </span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Durchführung der match:make 2024
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Schärfung des Geschäftsmodells
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
							</ul>
						</template>
					</TitleParagraphItem>

					<TitleParagraphItem
						:heading="3"
						:icon="'fusion'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal pt-5 md:text-snow"
					>
						<template #title>2025 - Growing </template>

						<template #paragraph>
							<ul class="list">
								<li>
									<span> Next-Level mit Scoring V3 </span>
									<div>
										<img
											class="w-6"
											src="/loader.gif"
											alt="On progress animation"
										/>
									</div>
								</li>
								<li>
									<span>
										Entwicklung und Launch des
										Plattform-MVPs
									</span>
									<div>
										<img
											class="w-6"
											src="/loader.gif"
											alt="On progress animation"
										/>
									</div>
								</li>
								<li>
									<span>
										Durchführung der match:make 2025
									</span>
									<div>
										<img
											class="w-6"
											src="/loader.gif"
											alt="On progress animation"
										/>
									</div>
								</li>
								<li>
									<span>
										Vergrösserung der re:morrow-Community
									</span>
									<div>
										<img
											class="w-6"
											src="/loader.gif"
											alt="On progress animation"
										/>
									</div>
								</li>
							</ul>
						</template>
					</TitleParagraphItem>
				</div>
			</div>
		</section>
	</main>
</template>
