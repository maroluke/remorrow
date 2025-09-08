<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'maksim-shutov--om-0jtqyRA-unsplash.jpg'">
			<template #title>Ein Abend für die Moore</template>

			<template #paragraph>
				Am 4. November 2025 veranstalten wir, unterstützt von unserem
				Partner
				<a
					class="glossar-link"
					href="https://www.wwf.ch"
					target="_blank"
					>WWF Schweiz</a
				>, einen ganz besonderen Abend und bringen das Thema Moorschutz
				dorthin, wo es hingehört: auf die grosse Leinwand.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Warum eigentlich Moore?</template>

				<template #paragraph>
					<div class="flex gap-10">
						<div class="sm:w-8/12">
							<p>
								Weil sie Klimahelden mit schlechtem Image sind.
								Vielen denken an Mücken, Sumpf und Gummistiefel
								– dabei sind Moore für unseren Planeten
								unverzichtbar.
							</p>
							<div class="sm:hidden pb-5">
								<div
									class="flex items-center text-coal justify-between gap-5 mb-6"
								>
									<div
										class="-ml-5 rounded-r-full bg-macaroni-and-cheese w-32 h-32 flex items-center justify-center flex-shrink-0"
									>
										<span
											class="font-bold text-5xl leading-none text-coal"
											>30%</span
										>
									</div>

									<p class="m-0">
										der weltweiten Kohlenstoffspeicher
										befinden sich in Moore.
									</p>
								</div>

								<div
									class="flex items-center text-coal justify-between gap-5"
								>
									<div
										class="-ml-5 rounded-r-full bg-macaroni-and-cheese w-32 h-32 flex items-center justify-center flex-shrink-0"
									>
										<span
											class="font-bold text-5xl leading-none text-coal"
											>4x</span
										>
									</div>

									<p class="m-0">
										mehr CO₂ speichern Moore im Vergleich zu
										Wäldern
									</p>
								</div>
							</div>
							<p>
								Sie speichern mehr Kohlenstoff als alle Wälder
								der Welt zusammen und binden ihn über
								Jahrtausende. Werden sie jedoch entwässert – wie
								in den letzten Jahrhunderten durch
								Landwirtschaft oder Torfabbau – stossen sie
								enorme Mengen Treibhausgase aus.
							</p>
							<p>
								Doch da ist noch mehr: Moore speichern Wasser
								wie ein Schwamm, schützen so vor Dürren und
								Überschwemmungen, filtern es zu sauberem
								Grundwasser und bieten bedrohten Arten ein
								Zuhause.
							</p>
						</div>
						<div class="sm:w-4/12 hidden sm:block">
							<p>
								<span
									class="font-bold text-4xl sm:text-7xl text-macaroni-and-cheese"
									>30%</span
								><br />
								der weltweiten Kohlenstoffspeicher befinden sich
								in Moore.
							</p>

							<p>
								<span
									class="font-bold text-4xl sm:text-7xl text-macaroni-and-cheese"
									>4x</span
								><br />
								mehr CO₂ speichern Moore im Vergleich zu Wäldern
							</p>
						</div>
					</div>
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Facts zum Abend</template>

				<template #paragraph>
					<div class="flex gap-10">
						<div>
							<p>
								<span class="text-2xl font-bold">Wann?</span
								><br />
								Am 4. November 2025
							</p>

							<p>
								<span class="text-2xl font-bold">Wo?</span
								><br />
								<a
									class="glossar-link"
									href="https://maps.app.goo.gl/7KEHuaUcgoUYmqTK9"
									target="_blank"
									>Im Kino FRAME, direkt am Zürich HB</a
								>
							</p>

							<div class="sm:hidden">
								<span class="text-2xl font-bold"
									>Was dich erwartet?</span
								><br />
								<ul
									class="pl-5 my-5 list-disc flex flex-col text-xl"
								>
									<li class="pl-2 font-bold">
										<p>
											Ein gemütlicher Kinosessel mit
											Popcorn
										</p>
									</li>
									<li class="pl-2 font-bold">
										<p>
											Exklusive Filmvorführung des
											Kinofilms «Mission to Marsh»
											(Englisch mit deutschen Untertiteln)
										</p>
									</li>
									<li class="pl-2 font-bold">
										<p>
											Spannende Panel-Diskussion mit dem
											Filmemacher und Moor-Experten
										</p>
									</li>
									<li class="pl-2 font-bold">
										<p>
											Eine neue Perspektive zum Thema Moor
										</p>
									</li>
								</ul>
							</div>

							<p class="my-6">
								<span class="text-2xl font-bold">Tickets</span
								><br />
								Der Eintritt kostet CHF 13 (🍿 inklusive) und
								das Ticket kriegst du direkt hier:
							</p>

							<SquircleButton
								:externalLink="true"
								:to="'https://frame.ch'"
								class="my-5 w-full"
							>
								<template #buttonRef
									>Jetzt Ticket kaufen</template
								>
							</SquircleButton>
						</div>

						<div class="sm:block hidden">
							<span class="text-2xl font-bold"
								>Was dich erwartet?</span
							><br />
							<ul
								class="pl-5 mt-5 list-disc flex flex-col text-xl"
							>
								<li class="pl-2">
									<p>
										Ein gemütlicher Kinosessel mit Popcorn
									</p>
								</li>
								<li class="pl-2">
									<p>
										Exklusive Filmvorführung des Kinofilms
										«Mission to Marsh» (Englisch mit
										deutschen Untertiteln)
									</p>
								</li>
								<li class="pl-2">
									<p>
										Spannende Panel-Diskussion mit dem
										Filmemacher und Moor-Experten
									</p>
								</li>
								<li class="pl-2">
									<p>Eine neue Perspektive zum Thema Moor</p>
								</li>
							</ul>
						</div>
					</div>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Mission to Marsh </template>

				<template #paragraph>
					<p>
						Die gemeinnützige Organisation aus Deutschland reist
						extra für diesen Abend an und zeigt uns den Kinofilm
						exklusiv im Rahmen ihrer offiziellen Europa-Tour 2025.
						<br /><br />
						Gemeinsam mit ihren Partnern renaturieren sie, was an
						Moorflächen bereits zerstört wurde und verteidigen die
						gesunden Moore vor diesem Schicksal.
					</p>

					<img
						class="rounded"
						src="/mission-to-marsh.jpg"
						alt="Mission to Marsh"
					/>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-coal md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Exklusive Partnerschaft </template>

				<template #paragraph>
					<p>
						Dieser Abend wäre nicht möglich ohne einen starken
						Partner. Deshalb arbeiten wir eng mit dem WWF Schweiz
						zusammen – und erhalten dort die Unterstützung, die wir
						brauchen.
					</p>

					<p>
						Seit über 45 Jahren engagiert sich der WWF für den
						Moorschutz in der Schweiz und war Mitinitiant der
						Rothenthurm-Initiative, die 1987 den Moorschutz in der
						Bundesverfassung verankerte.
					</p>
					<a href="https://www.wwf.ch" target="_blank"
						><img
							class="rounded max-w-32"
							src="/WWF_Logo_Small_RGB_72dpi.jpg"
							alt="WWF Schweiz"
					/></a>
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
