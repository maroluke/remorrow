<script>
import { computed, defineComponent, ref, getCurrentInstance } from "vue";
import { getSvgPath } from "figma-squircle";
import ArrowIcon from "./icons/IconArrow.vue";
import EmailIcon from "./icons/IconEmail.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import ProjectIcon from "./icons/IconProject.vue";
import DirectionIcon from "./icons/IconDirection.vue";
import AboutIcon from "./icons/IconAbout.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import { RouterLink } from "vue-router";

export default defineComponent({
    name: "SquircleButton",
    components: {
        ArrowIcon,
        EmailIcon,
        CommunityIcon,
        ProjectIcon,
        DirectionIcon,
        AboutIcon,
        LinkedinIcon,
        InstagramIcon,
        RouterLink,
    },
    props: {
        icon: {
            type: String,
            default: "arrow",
        },
        fillIcon: {
            type: String,
            default: "fill-snow",
        },
        classes: {
            type: String,
            default: "bg-rich-electric-blue",
        },
        to: {
            type: String,
            default: null,
        },
    },
    setup() {
        const uid = getCurrentInstance().uid;
        const buttonRef = ref();
        const svgPath = computed(() => {
            if (!buttonRef.value) {
                return null;
            }

            const width = buttonRef.value.clientWidth;
            const height = buttonRef.value.clientHeight;

            const svgPath = getSvgPath({
                width,
                height,
                cornerRadius: 8, // defaults to 0
                cornerSmoothing: 1, // cornerSmoothing goes from 0 to 1
            });

            return svgPath;
        });

        return {
            uid,
            buttonRef,
            svgPath,
        };
    },
});
</script>

<template>
    <div class="button-wrapper">
        <RouterLink v-if="this.to" :to="this.to">
            <button :style="{
                clipPath: `url('#squircle-${uid}')`,
            }"
                :class="`m-0 w-full gap-2 h-14 text-snow cursor-pointer flex justify-between items-center px-4 font-extrabold transition-all duration-300 ease-in-out focus-within:drop-shadow ${this.classes}`"
                ref="buttonRef">
                <span v-if="$slots.buttonRef" class="text-left font-extrabold">
                    <slot name="buttonRef"></slot>
                </span>

                <span>
                    <ArrowIcon v-if="icon === 'arrow'"
                        :class="`-rotate-90 self-center w-3 fill-inherit ${this.fillIcon}`" />
                    <EmailIcon v-if="icon === 'mail'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                    <CommunityIcon v-if="icon === 'community'"
                        :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                    <ProjectIcon v-if="icon === 'project'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                    <DirectionIcon v-if="icon === 'direction'"
                        :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                    <AboutIcon v-if="icon === 'about'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                    <LinkedinIcon v-if="icon === 'linkedin'" :class="`self-center w-4 fill-inherit ${this.fillIcon}`" />
                    <InstagramIcon v-if="icon === 'instagram'"
                        :class="`self-center w-4 fill-inherit ${this.fillIcon}`" />
                </span>
            </button>

            <svg v-if="svgPath" style="width: 0; height: 0; pointer-events: none">
                <defs>
                    <clipPath :id="`squircle-${uid}`">
                        <path :d="svgPath" />
                    </clipPath>
                </defs>
            </svg>
        </RouterLink>

        <button v-else :style="{
            clipPath: `url('#squircle-${uid}')`,
        }"
            :class="`m-0 w-full gap-2 h-14 text-snow cursor-pointer flex justify-between items-center px-4 font-extrabold transition-all duration-300 ease-in-out focus-within:drop-shadow ${this.classes}`"
            ref="buttonRef">
            <span v-if="$slots.buttonRef" class="text-left font-extrabold">
                <slot name="buttonRef"></slot>
            </span>

            <span>
                <ArrowIcon v-if="icon === 'arrow'"
                    :class="`-rotate-90 self-center w-3 fill-inherit ${this.fillIcon}`" />
                <EmailIcon v-if="icon === 'mail'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                <CommunityIcon v-if="icon === 'community'"
                    :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                <ProjectIcon v-if="icon === 'project'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                <DirectionIcon v-if="icon === 'direction'"
                    :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                <AboutIcon v-if="icon === 'about'" :class="`self-center w-6 fill-inherit ${this.fillIcon}`" />
                <LinkedinIcon v-if="icon === 'linkedin'" :class="`self-center w-4 fill-inherit ${this.fillIcon}`" />
                <InstagramIcon v-if="icon === 'instagram'"
                    :class="`self-center w-4 fill-inherit ${this.fillIcon}`" />
            </span>
        </button>

        <svg v-if="svgPath" style="width: 0; height: 0; pointer-events: none">
            <defs>
                <clipPath :id="`squircle-${uid}`">
                    <path :d="svgPath" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<style>
.button-wrapper button.bg-rich-electric-blue {
    @apply text-snow fill-snow hover:bg-coal hover:text-rich-electric-blue hover:fill-rich-electric-blue focus-within:bg-coal focus-within:text-rich-electric-blue focus-within:fill-rich-electric-blue;
}

.button-wrapper button.bg-coal {
    @apply text-rich-electric-blue fill-rich-electric-blue hover:bg-rich-electric-blue hover:text-snow hover:fill-snow focus-within:bg-rich-electric-blue focus-within:text-snow focus-within:fill-snow;
}

.button-wrapper button.bg-dark {
    @apply text-moon fill-moon hover:bg-rich-electric-blue hover:text-snow hover:fill-snow focus-within:bg-rich-electric-blue focus-within:text-snow focus-within:fill-snow;
}

.button-wrapper button.bg-snow {
    @apply text-rich-electric-blue fill-rich-electric-blue hover:bg-coal hover:text-rich-electric-blue hover:fill-rich-electric-blue focus-within:bg-coal focus-within:text-rich-electric-blue focus-within:fill-rich-electric-blue;
}
</style>