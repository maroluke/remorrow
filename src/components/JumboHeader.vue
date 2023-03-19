<script>
import IconArrow from "./icons/IconArrow.vue";

export default {
	name: "JumboHeader",
	components: {
		IconArrow,
	},
	props: {
		src: { type: String, default: "" },
		classes: { type: String, default: "" },
	},
	data() {
		return {
			imagePath: this.src,
		};
	},
	mounted() {
		const jumboContainer = document.querySelector("#jumbo");
		jumboContainer.style.backgroundImage = `url(${this.imagePath})`;
	},
	methods: {
		viewHeight() {
			document.querySelector(
				"#jumboHeader"
			).style.height = `${window.innerHeight}px`;
		},
	},
};
</script>

<template>
	<section
		id="jumboHeader"
		class="min-h-screen relative text-snow transition-all duration-500 flex flex-col pb-10 justify-stretch md:flex-row md:gap-10 md:md:justify-between md:items-center md:p-20 xl:p-10 md:bg-snow"
	>
		<div
			id="jumbo"
			class="jumbo object-cover bg-cover bg-no-repeat flex grow items-end px-5 md:max-w-lg md:min-h-[90vh] md:rounded-xl md:p-0 md:w-1/2"
			:class="classes"
		>
			<h1 class="pt-5 drop-shadow-contrast md:hidden">
				<slot name="title">Titel</slot>
			</h1>
		</div>

		<div
			class="flex gap-10 flex-col px-5 pt-5 z-20 flex-shrink md:p-0 md:text-dark md:w-1/2"
		>
			<h1 class="pt-5 drop-shadow-contrast hidden md:block max-w-screen-sm md:drop-shadow-none">
				<slot name="title">Titel</slot>
			</h1>

			<div class="max-w-screen-sm">
				<p class="md:text-2xl">
					<slot name="paragraph">Paragraph</slot>
				</p>
			</div>

			<!-- <IconArrow class="w-2 h-2 animate-fade-in-top-bottom fill-snow self-center md:fill-dark" /> -->
			<!-- <Transition name="scroll-down-animation">
				<IconArrow class="w-2 h-2 fill-snow transition self-center md:fill-dark" />
			</Transition> -->
		</div>
		<!-- <ContactIcons /> -->
	</section>
</template>

<style scoped>
.scroll-down-animation-enter-active,
.scroll-down-animation-leave-active {
	@apply opacity-100;
}

.scroll-down-animation-enter-from,
.scroll-down-animation-leave-to {
	@apply opacity-0 -translate-x-3 duration-200 delay-[0ms];
}
</style>