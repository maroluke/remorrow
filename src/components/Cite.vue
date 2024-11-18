<script setup lang="ts">
import { CirclePlay } from "lucide-vue-next";

const props = defineProps({
	profileImageUrl: {
		type: String,
		required: true,
	},
	profileName: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	companyUrl: {
		type: String,
		required: true,
	},
	reverseOrder: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div class="flex flex-col gap-4 sm:flex-row">
		<div
			:class="{ 'sm:order-2': reverseOrder }"
			class="sm:w-4/5 flex flex-col gap-5"
		>
			<cite class="text-2xl"> "<slot name="quote"></slot>" </cite>

			<button
				@click="$emit('open-video-modal')"
				class="text-rich-electric-blue flex-none sm:mb-10 flex w-fit gap-5 rounded-full border-2 border-rich-electric-blue p-2 pr-4 hover:bg-rich-electric-blue hover:text-snow transition-colors duration-300 ease-in-out"
			>
				<CirclePlay class="w-6 h-6" /> Statement abspielen
			</button>
		</div>

		<div :class="{ 'sm:order-1': reverseOrder }" class="sm:w-1/5">
			<div
				:class="!reverseOrder ? 'sm:items-end' : 'sm:items-start'"
				class="flex flex-row gap-5 justify-end items-center sm:flex-col"
			>
				<img
					:src="profileImageUrl"
					:alt="profileName"
					class="w-16 rounded-full order-2 sm:order-1 sm:w-24"
				/>
				<div
					:class="{ 'sm:items-end': !reverseOrder }"
					class="flex flex-col order-1 items-end sm:items-start sm:order-2"
				>
					<p class="m-0 text-sm">{{ profileName }}</p>
					<a
						class="opacity-50 m-0 text-sm underline hover:text-rich-electric-blue hover:opacity-100"
						:href="companyUrl"
						>{{ companyName }}</a
					>
				</div>
			</div>
		</div>
	</div>
</template>
