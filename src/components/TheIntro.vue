<script>
import IconArrow from "./icons/IconArrow.vue";

export default {
	props: {
		filename: { type: String, default: "" },
		rotate: { type: Number, default: 0 },
		twClass: { type: String, default: "" },
		bgGradient: { type: Boolean, default: false },
	},
	components: {
		IconArrow,
	},
};
</script>

<template>
	<section
		id="theIntro"
		class="px-5 text-snow h-full min-h-screen transition-all"
	>
		<div class="flex gap-10 flex-col items-center h-full z-30 pt-24">
			<div>
				<h1 class="pt-5">
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
			class="z-20 absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-black to-[rgba(0,0,0,.3)]"
		></div>

		<div
			v-if="bgGradient"
			:class="{ 'justify-end': !bgGradient }"
			class="z-10 absolute left-0 bottom-0 w-screen h-full"
		>
			<!-- <div class="rotate-180 bg-no-repeat bg-[url('media/{}')] bg-cover bg-center h-[200px]"></div> -->

			<img
				loading="lazy"
				alt="Title image"
				:class="`rotate-${rotate} ${twClass}`"
				class="object-contain w-full"
				:src="filename"
			/>
		</div>

		<!-- <ContactIcons /> -->
	</section>
</template>
