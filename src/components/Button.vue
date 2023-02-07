<template>
	<button
		class="rounded-sm mt-5 px-5 py-3 bg-rich-electric-blue w-full flex justify-between text-snow"
	>
		<p class="mb-0 font-extrabold">
			<slot name="CTAName">Erfahre mehr</slot>
		</p>

		<ArrowIcon class="-rotate-90 self-center fill-snow w-3" />
	</button>
</template>

<script setup>
import ArrowIcon from "./icons/IconArrow.vue";
</script>
