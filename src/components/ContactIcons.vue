<script setup>
import EmailIcon from './icons/IconEmail.vue';
import LinkedinIcon from './icons/IconLinkedin.vue';
import InstagramIcon from './icons/IconInstagram.vue';
import TwitterIcon from './icons/IconTwitter.vue';
import IconLogo from './icons/IconLogo.vue';
import { RouterLink } from "vue-router";
import { useNavigationStore } from "@/stores/navigation";

const navigationState = useNavigationStore();
</script>

<template>
    <div class="flex items-center justify-between gap-5 pt-8 pb-4">
        <RouterLink to="/" @click="navigationState.toggleNavigation">
            <IconLogo class="fill-silver w-20" />
        </RouterLink>

        <!-- divider -->
        <!-- <div class="w-0.5 h-10 bg-silver opacity-10"></div> -->

        <ul class="flex justify-end gap-6 flex-grow">
            <li><a href="#"><EmailIcon class="fill-silver h-4 text-coal" /></a></li>
            <!-- <li><a href="#"><LinkedinIcon class="fill-silver h-4 text-coal" /></a></li> -->
            <li><a href="#"><InstagramIcon class="fill-silver h-4 text-coal" /></a></li>
            <li><a href="#"><TwitterIcon class="stroke-silver h-4 text-coal" /></a></li>
        </ul>
    </div>
</template>
