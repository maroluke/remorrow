<script>
import SquircleButton from './SquircleButton.vue';
import { RouterLink } from 'vue-router';
import IconLogoMini from './icons/IconLogoMini.vue';
import IconArrow from './icons/IconArrow.vue';

export default {
    name: 'Footer',
    components: {
        SquircleButton,
        RouterLink,
        IconLogoMini,
        IconArrow,
    },

    data() {
        return {
            navigationLinks: [],
            contactIcons: {},
        };
    },

    methods: {
        // TODO: Merge next two methods into one
        getNavigationLinks() {
            const navigation = document.querySelector('.nav ul');
            const navigationItems = navigation.querySelectorAll('a');
            const navigationLinks = [];

            navigationItems.forEach((item) => {
                const linkText = item.innerText;
                const linkHref = item.getAttribute('href');
                navigationLinks.push({ linkText, linkHref });
            });

            return navigationLinks;
        },

        getContactIcons() {
            const contact = document.querySelector('nav .contact-icons');
            const contactItems = contact.querySelectorAll('li a');
            const contactIcons = [];

            contactItems.forEach((item) => {
                contactIcons.push(item);
            });

            return contactIcons;
        },

        outputContactIcons() {
            const contact = document.querySelector('footer .contact-icons');
            this.contactIcons.forEach((item) => {
                const duplicate = item.cloneNode(true);
                contact.append(duplicate);
            });
        },
    },

    mounted() {
        this.navigationLinks = this.getNavigationLinks();
        this.contactIcons = this.getContactIcons();
        this.outputContactIcons();
    },
}
</script>

<template>
    <footer class="bg-black px-5 pt-10 pb-10">
        <div class="absolute w-full h-full bottom-0 left-0 z-10">
            <img loading="lazy" src="sunrise-over-Earth_1600.jpg" alt="Globe from outta space" class="z-10 block">
            <div class="bg-gradient-to-r from-[rgba(0,0,0,.80)] to-transparent z-20 absolute w-full h-full top-0 left-0"></div>
        </div>
        
        <div class="drop-shadow-md z-20">
            <RouterLink to="/">
                <IconLogoMini class="fill-snow" />
            </RouterLink>

            <h4 class="font-medium mt-5">Gemeinsam für ein<br /><span class="text-rich-electric-blue font-medium">besseres Morgen</span>.</h4>
            <p class="font-normal mt-5 text-base">
                Initiated in Switzerland.<br />
                Inspired by nature.<br />
                Impact by people.<br />
                Follow us and spread the word.
            </p>

            <div class="contact-icons flex gap-8"></div>
        </div>

        <!-- <ul class="flex flex-col gap-5 mt-10 z-20">
            <li v-for="link in navigationLinks" :key="link.linkText" class="flex gap-3 items-center text-base">
                <IconArrow class="w-2 fill-snow -rotate-90" />
                <RouterLink :to="link.linkHref">{{ link.linkText }}</RouterLink>
            </li>
        </ul> -->
        
        <div class="mt-20 z-20">
            <h4 class="font-medium">Credits</h4>
            
            <ul>
                <li><a href="#" class="text-sm">Bild #1: Lawrence Aritao, Unsplash</a></li>
                <li><a href="#" class="text-sm">Bild #2: Markus Spiske, Unsplash</a></li>
                <li><a href="#" class="text-sm">Bild #3: Eleonore Kemmel, Unsplash</a></li>
                <li><a href="#" class="text-sm">Bild #4: Clarisse Meyer, Unsplash</a></li>
                <li><a href="#" class="text-sm">Bild #5: Mykhailo Kopyt, Unsplash</a></li>
            </ul>
        </div>

        <p class="text-sm font-normal mt-10 opacity-50 z-20">Copyright © 2021 - 2023</p>
    </footer>
</template>
