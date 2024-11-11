<script setup>
import { CarouselItem } from "@/components/ui/carousel";
import { CirclePlay } from "lucide-vue-next";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

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
});

const emit = defineEmits(["open-video-modal"]);

function openModal() {
	emit("open-video-modal");
}
</script>

<template>
	<CarouselItem class="-pl-0 flex flex-col gap-10">
		<div class="order-2 xs:order-1">
			<p>
				<slot name="quote"></slot>
			</p>

			<button
				@click="openModal"
				class="text-rich-electric-blue mb-10 flex gap-3"
			>
				<CirclePlay class="w-6 h-6" /> Zum Statement
			</button>
		</div>

		<div class="flex justify-between items-center order-1 xs:order-2">
			<div class="flex items-center gap-5">
				<img
					:src="profileImageUrl"
					:alt="profileName"
					class="w-24 rounded-full"
				/>
				<div class="flex flex-col">
					<cite>– {{ profileName }}</cite>
					<cite class="opacity-50">{{ companyName }}</cite>
				</div>
			</div>

			<a :href="companyUrl" target="_blank" rel="noopener">
				<slot name="company-logo"></slot>
			</a>
		</div>
	</CarouselItem>
</template>
