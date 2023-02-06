<template>
    <div class="rounded-sm">
        <div class="flex gap-2 justify-between">
            <h2 v-if="this.title && this.heading === 2" class="mb-5">
                <slot name="title"></slot>
            </h2>

            <h3 v-if="this.title && this.heading === 3" class="mb-5">
                <slot name="title"></slot>
            </h3>

            <div>
                <IconChecked v-if="this.icon === 'checked'" :class="this.iconStyle" class="w-12 self-start">
                </IconChecked>
                <IconRunning v-if="this.icon === 'running'" :class="this.iconStyle" class="w-12 self-start">
                </IconRunning>
                <IconPlaned v-if="this.icon === 'planed'" :class="this.iconStyle" class="w-12 self-start"></IconPlaned>
                <IconWorld v-if="this.icon === 'world'" :class="this.iconStyle" class="w-12 self-start"></IconWorld>
            </div>
        </div>

        <p v-if="this.paragraph">
            <slot name="paragraph"></slot>
        </p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import IconChecked from "./icons/IconChecked.vue";
import IconRunning from "./icons/IconRunning.vue";
import IconPlaned from "./icons/IconPlaned.vue";
import IconWorld from "./icons/IconWorld.vue";

defineProps({
    title: { type: String, default: null },
    paragraph: { type: String, default: null },
    heading: { type: Number, default: 2 },
    icon: { type: String, default: null },
    iconStyle: { type: String, default: null },
});
</script>
