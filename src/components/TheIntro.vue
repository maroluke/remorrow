<script>
import IconArrow from "./icons/IconArrow.vue";
import Sparticles from "sparticles";

export default {
	name: "TheIntro",
	props: {
		filename: { type: String, default: "" },
		rotate: { type: Number, default: 0 },
		twClass: { type: String, default: "" },
		bgGradient: { type: Boolean, default: false },
	},
	components: {
		IconArrow,
	},
	data() {
		return {
			isLoaded: false,
		};
	},
	methods: {
		onImgLoad() {
			this.isLoaded = true;
		},
	},
	mounted() {
		const container = document.querySelector("#outtaspace");
		const count = /Mobi|Android/i.test(navigator.userAgent) ? 100 : 500;
		new Sparticles(container, {
			composition: "source-over",
			count: count,
			speed: 0,
			parallax: 0,
			direction: 0,
			xVariance: 0,
			yVariance: 0,
			rotate: false,
			rotation: 0,
			alphaSpeed: 10,
			alphaVariance: 0,
			minAlpha: 0.3,
			maxAlpha: 0.9,
			minSize: 1,
			maxSize: 3,
			style: "fill",
			bounce: false,
			drift: 0,
			glow: 0,
			twinkle: true,
			color: ["#fff", "#FF9900", "#940CFF", "#ffffff"],
			shape: "circle",
			imageUrl: "",
		});
	},
};
</script>

<template>
	<section
		id="theIntro"
		class="px-5 text-snow h-full min-h-screen transition-all z-0 md:flex"
	>
		<div
			id="outtaspace"
			class="fixed left-0 right-0 top-0 bottom-0 z-10 w-full h-full"
		></div>

		<div
			class="flex gap-10 flex-col items-center justify-center z-30 pt-24 max-w-screen-sm drop-shadow-contrast md:pt-0 md:mx-auto"
		>
			<div class="pr-12 xl:pr-0">
				<h1 class="pt-5 md:pb-10">
					<slot name="title">Titel</slot>
				</h1>

				<p><slot name="paragraph">Paragraph</slot></p>
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

			<!-- <SquircleButton class="squircle-primary-700 pt-10">Erfahre mehr</SquircleButton> -->
			<!-- <button class="text-left font-bold text-2xl text-primary-700 uppercase text-base tracking-widest">Erfahre mehr</button> -->
		</div>

		<div
			v-if="bgGradient"
			:class="{ 'justify-end': !bgGradient }"
			class="z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black"
		>
			<!-- <div
				v-if="bgGradient"
				class="z-20 absolute right-0 bottom-0 w-11/12 h-screen bg-gradient-to-r from-black to-[rgba(0,0,0,.3)] 2xs:right-0 2xs:left-auto 2xs:w-3/4 md:w-full md:w-1/3 lg:w-1/4 lg:via-transparent"
			></div> -->
			<figure class="h-full">
				<img
					alt="Globe"
					:class="`rotate-${rotate} ${twClass}`"
					class="object-cover object-left w-11/12 h-full absolute right-0 2xs:object-left 2xs:w-3/4 md:object-center md:w-1/3 lg:w-1/4 xl:object-right"
					:src="filename"
				/>
			</figure>
		</div>

		<!-- <ContactIcons /> -->
	</section>
</template>

<style>
#outtaspace {
	@apply z-20;
}
</style>
