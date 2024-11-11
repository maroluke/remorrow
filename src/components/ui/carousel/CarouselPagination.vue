<template>
	<div class="flex justify-center mt-4 gap-2">
		<span
			v-for="(dot, index) in totalSlides"
			:key="index"
			:class="[{ '!bg-opacity-100': index === currentSlide }]"
			@click="goToSlide(index)"
			class="w-2 h-2 bg-opacity-50 bg-rich-electric-blue rounded-full cursor-pointer"
		></span>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCarousel } from "@/components/ui/carousel";

const { carouselApi } = useCarousel();
const currentSlide = ref(0);
const totalSlides = ref(0);

watch(carouselApi, (newApi) => {
	if (newApi) {
		totalSlides.value = newApi.slideNodes().length;
		newApi.on("select", () => {
			currentSlide.value = newApi.selectedScrollSnap();
		});
	}
});

function goToSlide(index: number) {
	if (carouselApi.value) {
		carouselApi.value.scrollTo(index);
	}
}
</script>
