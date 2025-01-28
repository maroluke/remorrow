<template>
	<section class="md:flex md:justify-center">
		<div class="max-w-screen-lg md:flex md:justify-center md:gap-20">
			<TitleParagraphItem class="md:!w-1/3">
				<template #title>Wir schaffen Raum für Unterstützung.</template>

				<template #paragraph>
					<p class="text-xl">
						Nachhaltige Projekte und Startups möchten wir auf ihrem
						Weg zu gesundem Wachstum begleiten und unterstützen –
						dafür schaffen wir die notwendigen Räume.
					</p>
				</template>
			</TitleParagraphItem>

			<div
				class="flex flex-col gap-10 mt-10 2xs:gap-4 sm:gap-10 md:gap-4 md:w-2/3 md:mt-0"
			>
				<div class="flex flex-col">
					<h3 class="leading-loose">1. Suche</h3>
					<p class="mt-0 flex-grow m-0 text-xl">
						Wir finden die Projekte & Startups da draussen, die
						einen positiven Beitrag zu unserer Zukunft leisten
						wollen.
					</p>
				</div>

				<div class="flex flex-col">
					<h3 class="leading-loose">2. Scoring</h3>
					<p class="mt-0 flex-grow m-0 text-xl">
						Mit einem holistischen Scoring finden wir heraus, ob die
						Idee zu uns und unseren Werten rundum Nachhaltigkeit und
						Wachstum passt.
					</p>
				</div>

				<div class="flex flex-col">
					<h3 class="leading-loose">3. Unterstützung</h3>
					<p class="mt-0 flex-grow m-0 text-xl">
						Jetzt ist das Credo: gesund wachsen! Unsere
						Unterstützung ist so vielfältig wie die Bedürfnisse. Aus
						diesem Grund arbeiten wir aktuell auch an einer
						digitalen Lösung. Unterdessen liegt unser Fokus auf
						direktem Support, der match:make (Link), dem Aufbau
						einer Community und der individuellen Begleitung von
						Macher:innen.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import TitleParagraphItem from "./TitleParagraphItem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import ProjectIcon from "./icons/IconProject.vue";
import SquircleButton from "./SquircleButton.vue";
</script>
