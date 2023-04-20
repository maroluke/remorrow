<script>
import ArrowIcon from "@components/icons/IconArrow.vue";

export default {
	name: "ItemContent",
	components: {
		ArrowIcon,
	},
	props: {
		index: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			accordionOpenHeader: `accordion-open-header-${this.index}`,
			accordionOpenBody: `accordion-open-body-${this.index}`,
		};
	},
};
</script>

<template>
	<section :id="this.accordionOpenHeader" class="border-b z-10 last:border-b-0">
		<h2 class="h-16 flex items-center">
			<button
				class="text-xl font-medium m-0 flex justify-between items-center w-full h-full bg-transparent"
				type="button"
				:data-accordion-target="`#${this.accordionOpenBody}`"
				:aria-controls="this.accordionOpenBody"
			>
				<slot name="title"></slot>

				<ArrowIcon
					data-accordion-icon
					class="rotate-180"
					:class="`self-center w-3 fill-current`"
				/>
			</button>
		</h2>

		<article
			:id="this.accordionOpenBody"
			class="pb-5"
			:aria-labelledby="this.accordionOpenHeader"
		>
			<p class="text-base font-medium"><slot name="paragraph"></slot></p>
		</article>
	</section>
</template>

<style scoped></style>
