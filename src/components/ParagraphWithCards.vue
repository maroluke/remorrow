<template>
	<section class="md:flex md:justify-center">
		<div class="max-w-screen-lg md:flex md:justify-center md:gap-20">
			<TitleParagraphItem class="md:!w-1/3">
				<template #title>Was wir tun.</template>

				<template #paragraph>
					Bei <span class="font-bold">re:morrow</span> steht die Unterstützung nachhaltiger & regenerativer Ideen im Zentrum.
				</template>
			</TitleParagraphItem>

			<div
				class="flex flex-col gap-10 mt-10 2xs:gap-4 sm:gap-10 md:gap-4 md:w-2/3 md:mt-0"
			>
				<div class="flex flex-col">
					<h3 class="leading-loose">1. Suche</h3>
					<p class="text-sm mt-0 flex-grow m-0 md:text-xl">
						Aufspüren von <RouterLink
							class="glossar-link"
							to="/projekte/"
							>Projekten & Startups</RouterLink
						> mit positiver Wirkung.
					</p>
				</div>

				<div class="flex flex-col">
					<h3 class="leading-loose">2. Scoring</h3>
					<p class="text-sm mt-0 flex-grow m-0 md:text-xl">
						Mit einem holistischen Scoring finden wir heraus, ob die Idee zu uns und unseren Werten passt.
					</p>
				</div>

				<div class="flex flex-col">
					<h3 class="leading-loose">3. Unterstützung</h3>
					<p class="text-sm mt-0 flex-grow m-0 md:text-xl">
						Jetzt wollen wir nur noch eins: Gesundes Wachstum.
					</p>
				</div>

				<div class="flex flex col">
					<p class="text-sm md:text-xl mt-4">Und da wir wissen, dass wir gemeinsam mehr erreichen können, bauen wir dafür eine 
						<RouterLink class="glossar-link" to="/community/">Community</RouterLink> auf.
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
