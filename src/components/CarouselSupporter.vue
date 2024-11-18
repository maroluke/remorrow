<script setup>
import Aws from "@/components/icons/logo-aws.vue";
import Lymbus from "@/components/icons/logo-lymbus.vue";
import TeNana from "@/components/icons/logo-tenana.vue";
</script>

<template>
	<div class="-ml-0 flex flex-col gap-20">
		<div class="-pl-0 flex flex-col items-center">
			<a
				href="https://aws.amazon.com/de/local/switzerland/"
				target="_blank"
				rel="noopener"
			>
				<Aws class="w-20 h-auto" />
			</a>

			<p class="mt-5 text-center">
				Amazon Web Services, der grösste Public Cloud Anbieter der Welt,
				stellte uns den notwendigen, physischen Raum zur Verfügung, die
				match:make durchzuführen.
			</p>
		</div>

		<div class="-pl-0 flex flex-col items-center">
			<a href="https://www.te-nana.ch/" target="_blank" rel="noopener">
				<TeNana class="w-20 h-auto" />
			</a>

			<p class="mt-5 text-center">
				Te Nana war nicht nur als nachhaltiges Startup am Event
				vertreten, sondern verköstigte auch alle Teilnehmenden mit einem
				tollen Apéro und ihren handgemachten Pite aus frischen,
				regionalen Zutaten.
			</p>
		</div>

		<div class="-pl-0 flex flex-col items-center">
			<a href="https://www.lymbus.ch/" target="_blank" rel="noopener">
				<Lymbus class="w-32 h-auto" />
			</a>

			<p class="mt-5 text-center">
				Lymbus begleitete das Event mit Foto & Video und sorgte dafür,
				dass nicht nur die Matches unter den Teilnehmenden sondern auch
				die Atmosphäre des Abends in guter Erinnerung bleiben können.
			</p>
		</div>
	</div>
</template>
