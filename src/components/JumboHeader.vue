<script>
import IconArrow from "./icons/IconArrow.vue";
import { defineComponent } from "vue";

export default defineComponent({
	setup() {},
	components: {
		IconArrow,
	},
	props: {
		src: { type: String, default: "" },
		classes: { type: String, default: "" },
	},
	mounted() {
		this.viewHeight();
		window.addEventListener("resize", () => {
			this.viewHeight();
		});
	},
	methods: {
		viewHeight() {
			document.querySelector(
				"#jumboHeader"
			).style.height = `${window.innerHeight}px`;
		},
	},
});

// export default {
//     name: 'JumboHeader',
//     props: {
//         src: { type: String, default: '' },
//         class: { type: String, default: '' },
//     },
//     mounted() {
//         this.viewHeight();
//         window.addEventListener('resize', this.viewHeight);
//     },
//     methods: {
//         viewHeight() {
//             document.querySelector('#jumboHeader').style.height = `${window.innerHeight}px`;
//         },
//     },
// };
</script>

<template>
	<section
		id="jumboHeader"
		class="text-snow transition-all duration-500 flex flex-col pb-10 relative md:justify-center md:flex-row md:gap-10 md:p-0 md:items-center md:px-20 md:bg-snow"
	>
		<div
			class="object-cover flex-grow bg-cover bg-no-repeat flex items-end px-5 md:max-w-lg md:h-2/3 md:rounded-xl md:p-0 md:w-1/2"
			:class="classes"
			:style="{ backgroundImage: `url(./${src})` }"
		>
			<h1 class="pt-5 drop-shadow-contrast md:hidden">
				<slot name="title">Titel</slot>
			</h1>
		</div>

		<div
			class="flex gap-10 flex-col items-center px-5 pt-5 z-20 flex-shrink md:p-0 md:text-dark md:w-1/2"
		>
			<h1 class="pt-5 drop-shadow-contrast hidden md:block max-w-screen-sm md:drop-shadow-none">
				<slot name="title">Titel</slot>
			</h1>

			<div class="max-w-screen-sm">
				<p class="md:text-2xl">
					<slot name="paragraph">Paragraph</slot>
				</p>
			</div>

			<IconArrow class="w-2 h-2 animate-fade-in-top-bottom fill-snow" />

			<!-- <p class="text-xl">
                Wir wissen alle, dass das schwierig wird.
            </p>

            <p class="text-xl">
                Wandel und Umdenken herbeizuführen ist schlicht herausfordernd.
            </p>

            <p class="text-2xl font-bold">
                Aber es gibt immer Hoffnung.
            </p> -->

			<!-- <button class="text-left font-bold text-2xl text-primary-700 uppercase text-base tracking-widest">Erfahre mehr</button> -->
		</div>
		<!-- <ContactIcons /> -->
	</section>
</template>

<style scoped>
</style>