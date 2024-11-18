<script setup>
import { ref, onMounted } from "vue";
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
import { set } from "@vueuse/core";

const pluginAutoplay = Autoplay({
	delay: 3000,
	stopOnMouseEnter: true,
	stopOnInteraction: false,
});

const pluginFade = Fade();

const images = import.meta.glob(
	"/src/assets/media/mm2024/*.{jpg,png,jpeg,webp}",
	{
		eager: true,
	},
);

const imageUrlList = Object.keys(images).map((key) => images[key].default);
const currentIndex = ref(0); // Ensure currentIndex is properly defined and reactive
const emblaApi = ref(null); // Store the emblaApi instance

const handleSelect = () => {
	if (emblaApi.value) {
		currentIndex.value = emblaApi.value.selectedScrollSnap();
	}
};

const initApi = (api) => {
	emblaApi.value = api;
	emblaApi.value.on("select", handleSelect);
};

const handleImageLoad = (imageUrl) => {
	loadingStates.value = set(loadingStates.value, imageUrl, false);
};
</script>

<template>
	<Carousel
		:opts="{
			loop: true,
			duration: 10,
		}"
		:plugins="[pluginAutoplay, pluginFade]"
		@mouseenter="pluginAutoplay.stop"
		@mouseleave="pluginAutoplay.play"
		@init-api="initApi"
		class="max-w-screen-lg mx-auto"
	>
		<CarouselContent class="-ml-0">
			<CarouselItem
				v-for="(imageUrl, index) in imageUrlList"
				:key="index"
				class="-pl-0 md:pt-20 flex justify-center items-center"
			>
				<div
					class="absolute inset-0 flex items-center justify-center bg-transparent -z-10"
				>
					<div class="loader"></div>
				</div>
				<img
					:src="imageUrl"
					alt="Carousel Image"
					class="w-auto h-auto max-h-[640px] shadow-xl border-slate-800 md:border md:rounded-md"
					loading="lazy"
				/>
			</CarouselItem>
		</CarouselContent>

		<CarouselPrevious
			class="-left-10 text-rich-electric-blue bg-opacity-5 bg-snow flex border border-rich-electric-blue transition-all duration-500 hover:text-snow hover:bg-rich-electric-blue hover:-translate-x-2"
		/>
		<CarouselNext
			class="-right-10 text-rich-electric-blue bg-opacity-5 bg-snow flex border border-rich-electric-blue transition-all duration-500 hover:text-snow hover:bg-rich-electric-blue hover:translate-x-2"
		/>

		<!-- Display the current image index and total count -->
		<div class="text-center py-8">
			{{ currentIndex + 1 }} / {{ imageUrlList.length }}
		</div>
	</Carousel>
</template>

<style scoped>
.loader {
	border: 4px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top: 4px solid #3498db;
	width: 40px;
	height: 40px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
