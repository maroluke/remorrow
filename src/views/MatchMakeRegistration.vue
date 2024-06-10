<script>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";

export default {
    name: "QAForm",
    components: {
        TitleParagraphItem,
        JumboHeader
    },
    methods: {
        updatePanelist (ev) {
        this.currentPanelist = ev.target.value
        }
    },
    data () {
        return {
        panelists: ['Evan You', 'Chris Fritz'],
        currentPanelist: 'Evan You'
        }
    }
}
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'lawrence-kayku-frWOcVisp8U-unsplash.jpg'">
			<template #title> Sei ein Teil davon </template>

			<template #paragraph>
				Wir sind der Meinung, dass wir miteinander nicht nur mehr
				bewirken, sondern auch aneinander wachsen können. Auf unserer
				Reise mit re:morrow freuen wir uns auf alle, die mit uns einen
				nachhaltig positiven Beitrag für eine hoffnungsvolle Zukunft
				leisten wollen.
			</template>
		</JumboHeader>

        <form
            name="ask-question"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
            <input type="hidden" name="form-name" value="ask-question" />
            <label v-for="(panelist, index) in panelists" :key="index">
            <input
                type="radio"
                name="panelist"
                :value="panelist"
                @input="ev => updatePanelist"
                :checked="panelist === currentPanelist"
            />
            <span>{{ panelist }}</span>
            </label>
            ...
            <button>Submit</button>
        </form>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>