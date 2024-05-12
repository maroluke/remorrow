<template>
	<div>
		<div class="max-w-screen-xl">
			<div
				v-if="$slots.title"
				class="flex gap-5 justify-between items-center mb-5 grow xl:items-start"
			>
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

			<div v-if="$slots.paragraph">
				<slot name="paragraph"></slot>
			</div>
		</div>

		<SquircleButton
			v-if="contact"
			:icon="icon"
			:classes="classes"
			@click="navigationState.toggleModal"
			class="mt-5 w-full"
		>
			<template #buttonRef>{{ button }}</template>
		</SquircleButton>

		<SquircleButton
			v-else-if="button"
			:icon="icon"
			:classes="classes"
			:to="link"
			:external-link="externalLink"
			class="mt-5 w-full"
		>
			<template #buttonRef>{{ button }}</template>
		</SquircleButton>
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

import { useNavigationStore } from "@/stores/navigation";

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
	setup() {
		const navigationState = useNavigationStore();
		return { navigationState };
	},
	props: {
		heading: {
			type: Number,
			default: 2,
		},
		icon: {
			type: String,
			default: "arrow",
		},
		iconStyle: {
			type: String,
			default: "fill-snow",
		},

		title: { type: String, default: null },
		paragraph: { type: String, default: null },
		button: { type: String, default: null },
		link: { type: String, default: null },
		classes: { type: String, default: "bg-coal" },
		contact: { type: Boolean, default: false },
		externalLink: { type: Boolean, default: false },
	},
};
</script>
