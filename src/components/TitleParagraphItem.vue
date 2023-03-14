<template>
	<div class="rounded-sm">
		<div v-if="$slots.title" class="flex gap-5 justify-between items-center mb-5">
			<h2 v-if="heading === 2" class="sm:min-w-[200px]">
				<slot name="title"></slot>
			</h2>

			<h3 v-if="heading === 3" class="sm:min-w-[200px]">
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
				<IconGrow
					v-if="icon === 'grow'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
				<IconFusion
					v-if="icon === 'fusion'"
					:class="iconStyle"
					class="w-12 self-start"
				/>
			</div>
		</div>

		<div class="flex flex-col">
			<p v-if="$slots.paragraph">
				<slot name="paragraph"></slot>
			</p>

			<SquircleButton
				v-if="button"
				:icon="'direction'"
				:classes="'bg-coal'"
				:to="to"
				class="mt-5"
			>
				<template #buttonRef>{{ button }}</template>
			</SquircleButton>
		</div>
	</div>
</template>

<script>
import IconChecked from "./icons/IconChecked.vue";
import IconRunning from "./icons/IconRunning.vue";
import IconPlaned from "./icons/IconPlaned.vue";
import IconWorld from "./icons/IconWorld.vue";
import IconNorming from "./icons/IconNorming.vue";
import IconGrow from "./icons/IconGrow.vue";
import IconFusion from "./icons/IconFusion.vue";
import SquircleButton from "./SquircleButton.vue";

export default {
	name: "TitleParagraphItem",
	components: {
		IconChecked,
		IconRunning,
		IconPlaned,
		IconWorld,
		IconNorming,
		IconGrow,
		IconFusion,
		SquircleButton,
	},
	props: {
		heading: {
			type: Number,
			default: 2,
		},
		icon: {
			type: String,
			default: null,
		},
		iconStyle: {
			type: String,
			default: "fill-snow",
		},

		title: { type: String, default: null },
		paragraph: { type: String, default: null },
		button: { type: String, default: null },
		to: { type: String, default: null },
	},
};
</script>
