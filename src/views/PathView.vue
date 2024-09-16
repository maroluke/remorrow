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
				Wir stehen noch am Anfang, haben viele Ideen, sind motiviert und
				zu 100% davon überzeugt, dass wir als Gemeinschaft und Kollektiv
				mehr erreichen können. Um unsere Vision umzusetzen, haben wir
				eine Roadmap mit 4 Phasen entwickelt.
			</template>
		</JumboHeader>

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
							In erster Linie möchten wir organisch wachsen. Wir
							möchten begeisterte Menschen finden, die Teil dieser
							Vision sein wollen und Partnerschaften schliessen,
							mit denen wir uns gemeinsam entwickeln und für
							künftiges Wachstum wurzeln können.
							<br /><br />
							re:morrow entwickeln wir durch die nachfolgenden
							Etappen:
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
						<template #title>2022 - Storming & Norming </template>

						<template #paragraph>
							<ul class="list">
								<li class="!bg-green-400">
									<span>
										Entwicklung der Idee und zentraler
										Konzepte
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span> Repräsentation / Branding </span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Aufbau der Strategie und Kommunikation
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span> Purpose, Vision und Mission </span>
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
										Offizieller Launch von Webseite & Social
										Media
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span> Schärfung Value Proposition </span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Erste Projekte & Partnerschaften
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Weiterentwicklung Kernkonzepte
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
						<template #title
							>2024 - Working with the plants
						</template>

						<template #paragraph>
							<ul class="list">
								<li class="!bg-green-400">
									<span>
										Strukturiertes Onboarding von Projekten
										& Startups
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Kontinuierliche Verbesserung des
										holistischen Scorings
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Umsetzen von Events / kommunikativen
										Massnahmen
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li>
									<span>
										Erweiterung der Pioneer- & Hero-Teams
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
										Lancierung des initialen Angebots
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

					<TitleParagraphItem
						:heading="3"
						:icon="'fusion'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal pt-5 md:text-snow"
					>
						<template #title>2025/26 - Growing </template>

						<template #paragraph>
							<ul class="list">
								<li>
									Fokussierung der Arbeiten an der Plattform
								</li>
								<li>Erweiterung der Pioneer- & Hero-Teams</li>
								<li>Stabilisierung des Angebots</li>
								<li>Vorbereitung für breitere Skalierung</li>
							</ul>
						</template>
					</TitleParagraphItem>
				</div>
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
							<strong>Auf den Punkt:</strong> Wir wollen eine
							hoffnungsvolle und inspirierende Zukunft. Wir
							leisten unseren Beitrag, indem wir nachhaltige Ideen
							mit positiver Wirkung aktiv unterstützen und
							fördern.
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
							Konkret entwickeln wir eine Community von
							interessierten und motivierten Menschen, die
							gemeinsam das Morgen mitgestalten wollen, sich
							gegenseitig unterstützen und an guten, nachhaltigen
							Ideen arbeiten. Perspektivisch bauen wir eine
							digitale Plattform, die diese Unterstützung auf
							globaler Ebene zu skaliert.
						</p>
					</template>
				</TitleParagraphItem>
			</div>
		</section>

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
								>Ein besseres Morgen für Mensch und
								Planet</strong
							>, in dem Hoffnung, Inspiration und Begeisterung
							gegenwärtig ist und Mut für Veränderung macht.
							<br /><br />
							Wir sehen re:morrow als globale Plattform, um die
							richtigen Menschen zusammenzubringen. Die Menschen,
							die aktiv mitgestalten und jene, die Ideen mit
							positiver Wirkung vorantreiben.
							<br /><br />
							So schaffen wir eine Basis für kollaboratives
							Wirken, die Lösung von Problemen und mehr Hoffnung
							in eine bessere Zukunft für alle.
						</p>
					</template>
				</TitleParagraphItem>

				<!-- <TitleParagraphItem>
					<template #title>Ziele </template>

					<template #paragraph>
						Natürlich setzen wir uns auch konkrete Ziele, um unsere
						Vision in die Realität zu überführen. Trotzdem, nicht
						vergessen:
						<br />
						«Plans are nothing – planning is everything».
					</template>
				</TitleParagraphItem>

				<TitleParagraphItem :heading="3">
					<template #title>2024 </template>

					<template #paragraph>
						<div class="mt-5">
							<ul class="list">
								<li>
									Auf mindestens einem sozialen Kanal hat
									re:morrow seine Bekanntheit resp.
									Reichweite auf 2’000 Follower ausgebaut.
								</li>
								<li>
									Es existiert eine digitale Plattform für
									Ideen & Projekte.
								</li>
							</ul>
						</div>
					</template>
				</TitleParagraphItem>

				<TitleParagraphItem :heading="3">
					<template #title>2025 </template>

					<template #paragraph>
						<div class="mt-5">
							<ul class="list">
								<li>
									Die re:morrow-Familie zählt 15 Projekte.
								</li>
								<li>
									500 Menschen sind Teil der
									re:morrow-Community und setzen sich aktiv
									für nachhaltige Ideen und deren Umsetzung
									ein.
								</li>
							</ul>
						</div>
					</template>
				</TitleParagraphItem> -->
			</div>
		</section>
	</main>
</template>
