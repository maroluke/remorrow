<script>
import JumboHeader from "@components/JumboHeader.vue";
import QuestionForm from '@components/QuestionForm.vue';

export default {
    name: "QAForm",
    components: {
        JumboHeader,
		QuestionForm
    },
}
</script>

<template>
	<section
		class="px-5 py-24 bg-dark text-snow lg:bg-snow lg:text-dark lg:flex lg:justify-center lg:px-20 lg:pt-40"
	>
		<div
			class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start lg:flex-row lg:max-w-full lg:gap-20"
		>
			<div
				class="flex gap-10 flex-col pt-5 z-20 shrink items-center lg:p-0 lg:text-dark lg:w-1/3"
			>
				<h1
					class="drop-shadow-contrast self-start hyphens-auto lg:drop-shadow-none"
				>
					match:make Registrierung
				</h1>
			</div>

			<div class="flex gap-10 flex-col lg:w-2/3 lg:max-w-screen-sm">
				<div>
					<QuestionForm />
				</div>
			</div>
		</div>
	</section>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>