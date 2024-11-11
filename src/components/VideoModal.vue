<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { CircleX } from "lucide-vue-next";

const props = defineProps({
	url: {
		type: String,
		required: true,
	},
});

const emits = defineEmits(["close"]);
const videoRef = ref(null);

onMounted(() => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const video = entry.target;
				video.src = props.url;
				observer.unobserve(video);
			}
		});
	});

	if (videoRef.value) {
		observer.observe(videoRef.value);
	}
});

function closeModal() {
	emits("close");
}
</script>

<template>
	<div
		class="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-75 backdrop-blur-lg flex justify-center items-center z-50 p-10"
		@click.self="closeModal"
	>
		<button
			class="absolute top-10 right-10 bg-none text-sm bg-snow rounded-full text-rich-electric-blue cursor-pointer z-50"
			@click="closeModal"
		>
			<CircleX class="h-6" />
		</button>
		<div class="relative blur-none">
			<video ref="videoRef" controls class="w-screen h-auto max-h-screen">
				<source type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
</template>
