<template>
	<div class="rounded-sm">
		<div v-if="$slots.title" class="flex gap-5 justify-between items-center mb-5">
			<h2 v-if="heading === 2">
				<slot name="title"></slot>
			</h2>

			<h3 v-if="heading === 3">
				<slot name="title"></slot>
			</h3>

			<div v-if="icon">
				<IconChecked
					v-if="icon === 'checked'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
				<IconRunning
					v-if="icon === 'running'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
				<IconPlaned
					v-if="icon === 'planed'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
				<IconWorld
					v-if="icon === 'world'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
				<IconNorming
					v-if="icon === 'norming'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
			</div>
		</div>

		<p v-if="$slots.paragraph">
			<slot name="paragraph"></slot>
		</p>
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import IconChecked from "./icons/IconChecked.vue";
import IconRunning from "./icons/IconRunning.vue";
import IconPlaned from "./icons/IconPlaned.vue";
import IconWorld from "./icons/IconWorld.vue";
import IconNorming from "./icons/IconNorming.vue";

defineProps({
	title: { type: String, default: null },
	paragraph: { type: String, default: null },
	heading: { type: Number, default: 2 },
	icon: { type: String, default: null },
	iconStyle: { type: String, default: null },
});
</script>
