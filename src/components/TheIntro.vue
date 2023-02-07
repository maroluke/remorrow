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
		class="px-5 text-snow pt-24 h-screen transition-all duration-500"
	>
		<div class="flex gap-10 flex-col items-center pt-0 h-full z-20">
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
			class="z-10 absolute left-0 bottom-0 w-screen h-full flex flex-col pt-24"
			:class="{ 'justify-end': !bgGradient }"
		>
			<div
				v-if="bgGradient"
				class="bg-gradient-to-b from-dark to-black flex-grow"
			></div>
			<!-- <div class="rotate-180 bg-no-repeat bg-[url('media/{}')] bg-cover bg-center h-[200px]"></div> -->

			<img
				alt="Title image"
				:class="`rotate-${rotate} ${twClass}`"
				class="object-contain h-200"
				:src="filename"
			/>
		</div>

		<!-- <ContactIcons /> -->
	</section>
</template>
