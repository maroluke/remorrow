<script setup>
import Aws from "@/components/icons/logo-aws.vue";
import Lymbus from "@/components/icons/logo-lymbus.vue";
import TeNana from "@/components/icons/logo-tenana.vue";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselItem,
	CarouselPrevious,
	CarouselPagination,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const pluginAutoplay = Autoplay({
	delay: 3500,
	stopOnMouseEnter: true,
	stopOnInteraction: false,
});

const pluginFade = Fade();
</script>

<template>
	<Carousel
		:opts="{
			active: false,
			loop: true,
			duration: 15,
			breakpoints: {
				'(min-width: 475px)': {
					active: true,
				},
			},
		}"
		:plugins="[pluginAutoplay, pluginFade]"
		@mouseenter="pluginAutoplay.stop"
		@mouseleave="pluginAutoplay.play"
	>
		<CarouselContent class="-ml-0 flex flex-col gap-10 xs:flex-row">
			<CarouselItem class="-pl-0">
				<a href="companyUrl" target="_blank" rel="noopener">
					<Aws class="w-20 h-auto" />
				</a>

				<p class="mt-5">
					Amazon Web Services, der grösste Public Cloud Anbieter der
					Welt, stellte uns den notwendigen, physischen Raum zur
					Verfügung, die match:make durchzuführen.
				</p>
			</CarouselItem>

			<CarouselItem class="-pl-0">
				<a href="companyUrl" target="_blank" rel="noopener">
					<TeNana class="w-20 h-auto" />
				</a>

				<p class="mt-5">
					Te Nana war nicht nur als nachhaltiges Startup am Event
					vertreten, sondern verköstigte auch alle Teilnehmenden mit
					einem tollen Apéro und ihren handgemachten Pite aus
					frischen, regionalen Zutaten.
				</p>
			</CarouselItem>

			<CarouselItem class="-pl-0">
				<a href="companyUrl" target="_blank" rel="noopener">
					<Lymbus class="w-32 h-auto" />
				</a>

				<p class="mt-5">
					Lymbus begleitete das Event mit Foto & Video und sorgte
					dafür, dass nicht nur die Matches unter den Teilnehmenden
					sondern auch die Atmosphäre des Abends in guter Erinnerung
					bleiben können.
				</p>
			</CarouselItem>
		</CarouselContent>

		<CarouselPrevious
			class="-left-20 text-black bg-opacity-5 bg-black hidden xs:flex"
		/>
		<CarouselNext
			class="-right-20 text-black bg-opacity-5 bg-black hidden xs:flex"
		/>

		<CarouselPagination class="hidden xs:flex" />
	</Carousel>
</template>
