<template>
    <section class="special-gradient z-30">
        <div class=" rounded-lg px-5 py-10 bg-white text-coal drop-shadow-xl">
            <p class="italic">
                “Wenn wir die Welt neu denken wollen, müssen wir zu den
                gedanklichen Fundamenten zurückgehen, auf denen die uns heute
                geläufige Welt aufgebaut ist.
            </p>
            <p class="italic">
                Dazu gehört neben dem Blick, den der Mensch auf die Natur hat,
                auch der Blick, den er auf sich selbst hat.”
            </p>

            <div class="flex gap-5">
                <div class="flex-shrink w-2/3">
                    <p>Maja Göpel</p>
                    <p class="text-sm font-normal">
                        Politökonomin, Transformationsforscherin,
                        Nachhaltigkeitsexpertin und
                        Gesellschaftswissenschaftlerin mit Schwerpunkt auf
                        transdisziplinärem Denken
                    </p>
                </div>

                <div class="w-1/3 flex flex-col justify-between">
                    <div class="rounded-full overflow-hidden">
                        <img
                            class="object-cover"
                            src="../assets/media/profile-maja-goepel.jpg"
                            alt="Maja Göpel"
                        />
                    </div>

                    <ul class="flex justify-around">
                        <li class="flex justify-center items-center flex-1">
                            <SquircleButton
                                :icon="'instagram'"
                                :classes="'bg-coal !h-auto !p-2'"
                                :to="'https://www.instagram.com/majagoepel/'"
                                class="mt-5"
                            >
                            </SquircleButton>
                        </li>
                        <li class="flex justify-center items-center flex-1">
                            <SquircleButton
                                :icon="'linkedin'"
                                :classes="'bg-coal !h-auto !p-2'"
                                :to="'https://www.linkedin.com/in/majagoepel/'"
                                class="mt-5"
                            >
                            </SquircleButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import TitleParagraphItem from "./TitleParagraphItem.vue";
import IconArrow from "./icons/IconArrow.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import SquircleButton from "./SquircleButton.vue";
</script>