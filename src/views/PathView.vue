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
						In erster Linie möchten wir organisch wachsen. Wir
						möchten begeisterte Menschen finden, die Teil dieser
						Vision sein wollen und Partnerschaften schliessen, mit
						denen wir uns gemeinsam entwickeln und für künftiges
						Wachstum wurzeln können.
						<br /><br />
						Fortomorrow entwickeln wir durch die nachfolgenden
						Etappen:
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
										Entwicklung der Repräsentation
										(Branding) und Kommunikation
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Aufbau des 42-Fundaments (entwickeln
										eigener Konzepte)
									</span>
									<div>
										<IconChecked2
											class="fill-snow w-6 self-start"
										/>
									</div>
								</li>
								<li class="!bg-green-400">
									<span>
										Schärfung Value Proposition und
										Strategie
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
						:icon="'planed'"
						:iconStyle="'fill-coal md:fill-moon'"
						class="text-coal py-5 md:text-snow"
					>
						<template #title>2023 - Seeding </template>

						<template #paragraph>
							<ul class="list">
								<li>
									<span>
										Weiterentwicklung von 42-Konzepten
									</span>
									<div>
										<img class="w-6" src="loader.gif" alt="On progress animation">
									</div>
								</li>
								<li>
									<span>
										Projekte finden und Kollaboration aufbauen
									</span>
									<div>
										<img class="w-6" src="loader.gif" alt="On progress animation">
									</div>
								</li>
								<li>
									<span>
										Start / Verstärkung des Community-Building
									</span>
									<div>
										<img class="w-6" src="loader.gif" alt="On progress animation">
									</div>
								</li>
								<li>
									<span>
										Konzeption Plattform
									</span>
									<div>
										<img class="w-6" src="loader.gif" alt="On progress animation">
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
						<template #title>2023/24 - Planting </template>

						<template #paragraph>
							<ul class="list">
								<li>
									Reporting 2023 & Re-Evaluation Strategie
								</li>
								<li>Onboarding weiterer Projekte</li>
								<li>Fokus auf Plattform</li>
								<li>Definition & Angebot erster Services</li>
								<li>Etablierung erster Partnerschaften</li>
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
									Reporting 2024 & Re-Evaluation Strategie
								</li>
								<li>
									Weitere Projekte, Mitglieder und Partner
									gewinnen
								</li>
								<li>Plattform-Erweiterung: Ideen.</li>
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
						<strong>Zusammen leisten wir einen Beitrag</strong> für
						eine hoffnungsvolle und begeisternde Zukunft, in der wir
						Menschen im Einklang mit unserem Planeten und
						Mitmenschen leben können.
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
						<strong>Wir setzen uns für Ideen & Projekte ein</strong
						>, die einen nachweisbaren und positiven Impact
						realisieren und diesen in ihren Werten sowie
						Geschäftsmodell verankert haben. Für diese Unterfangen,
						die unseren Werten entsprechen und überzeugen, schaffen
						wir einen fruchtbaren Nährboden.
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
						<strong
							>Ein besseres Morgen für Mensch und Planet</strong
						>, in dem Hoffnung, Inspiration und Begeisterung
						gegenwärtig ist und Mut für Veränderung macht.
						<br /><br />
						Konkret will sich fortomorrow als relevante, globale
						Plattform etablieren um die richtigen Menschen &
						nachhaltige Projekte zusammenzubringen. So schaffen wir
						eine Basis für kollaboratives Wirken, die Lösung von
						Problemen und positivem Impact.
					</template>
				</TitleParagraphItem>

				<TitleParagraphItem>
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
									fortomorrow seine Bekanntheit resp.
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
									Die fortomorrow-Familie zählt 15 Projekte.
								</li>
								<li>
									500 Menschen sind Teil der
									fortomorrow-Community und setzen sich aktiv
									für nachhaltige Ideen und deren Umsetzung
									ein.
								</li>
							</ul>
						</div>
					</template>
				</TitleParagraphItem>
			</div>
		</section>
	</main>
</template>
