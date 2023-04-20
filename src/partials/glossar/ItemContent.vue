<script>
import ArrowIcon from "@components/icons/IconArrow.vue";

export default {
	name: "ItemContent",
	components: {
		ArrowIcon,
	},
	props: {
		index: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			accordionHeader: this.index,
			accordionBody: `accordion-body-${this.index}`,
		};
	},
};
</script>

<template>
	<RouterLink :to="`#${this.index}`" class="text-current block">
		<h2 :id="this.accordionHeader" class="h-16 flex items-center">
			<button
				class="text-xl font-medium m-0 flex justify-between items-center w-full h-full bg-transparent"
				type="button"
				:aria-controls="this.accordionBody"
				aria-expanded="false"
			>
				<slot name="title"></slot>

				<svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</button>
		</h2>
	</RouterLink>

	<article
		:id="this.accordionBody"
		class="pb-5 hidden border-b"
		:aria-labelledby="this.accordionHeader"
	>
		<p class="text-base font-medium"><slot name="paragraph"></slot></p>
	</article>
</template>

<style scoped>
	h2.bg-gray-100 button svg {
		@apply rotate-180;
	}
</style>
