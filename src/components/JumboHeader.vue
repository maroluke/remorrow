<script>
import IconArrow from './icons/IconArrow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
    },
    components: {
        IconArrow,
    },
    props: {
        src: { type: String, default: '' },
        class: { type: String, default: '' },
    },
    mounted() {
        this.viewHeight();
        window.addEventListener('resize', () => {
            this.viewHeight();
        });
    },
    methods: {
        viewHeight() {
            document.querySelector('#jumboHeader').style.height = `${window.innerHeight}px`;
        },
    },
})

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
    <section id="jumboHeader" class="text-snow transition-all duration-500 flex flex-col pb-10 relative">
        <div class="object-cover flex-grow bg-cover bg-no-repeat flex items-end px-5" :class="class"
            :style="{ backgroundImage: `url(./${src})` }">
            <h1 class="pt-5 drop-shadow-contrast">
                <slot name="title">Titel</slot>
            </h1>
        </div>

        <div class="flex gap-10 flex-col items-center px-5 pt-5 z-20 flex-shrink">
            <div>
                <p>
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