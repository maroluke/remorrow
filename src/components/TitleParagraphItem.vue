<template>
	<div>
		<div>
			<template v-if="$slots.title">
				<div
					:class="{
						'justify-center': center,
						'text-between': !center,
					}"
					class="flex gap-5 items-center mb-5 grow xl:items-start"
				>
					<template v-if="heading === 2">
						<h2 :class="{ 'w-full': !center }">
							<slot name="title"></slot>
						</h2>
					</template>

					<template v-if="heading === 3">
						<h3 class="w-full">
							<slot name="title"></slot>
						</h3>
					</template>

					<template v-if="icon">
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
					</template>
				</div>
			</template>

			<template v-if="$slots.paragraph">
				<div>
					<slot name="paragraph"></slot>
				</div>
			</template>
		</div>

		<template v-if="contact">
			<SquircleButton
				:icon="icon"
				:classes="classes"
				@click="navigationState.toggleModal('#contact-modal')"
				class="mt-5 w-full"
			>
				<template #buttonRef>{{ button }}</template>
			</SquircleButton>
		</template>

		<template v-else-if="button">
			<SquircleButton
				:icon="icon"
				:classes="classes"
				:to="link"
				:external-link="externalLink"
				class="mt-5 w-full"
			>
				<template #buttonRef>{{ button }}</template>
			</SquircleButton>
		</template>
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
		center: {
			type: Boolean,
			default: false,
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
