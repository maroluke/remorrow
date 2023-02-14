<script>
import EmailIcon from "./icons/IconEmail.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import TwitterIcon from "./icons/IconTwitter.vue";
import IconLogo from "./icons/IconLogo.vue";
import { RouterLink } from "vue-router";
import { useNavigationStore } from "@/stores/navigation";

export default {
    name: "ContactIcons",
    components: {
        EmailIcon,
        LinkedinIcon,
        InstagramIcon,
        IconLogo,
        RouterLink,
        TwitterIcon,
    },
    data() {
        return {
            navigationLinks: [],
            contactIcons: {},
            navigationState: {},
        };
    },
    mounted() {
        this.navigationState = useNavigationStore();
    },
};
</script>

<template>
	<div class="flex items-center justify-between gap-5 pt-8 pb-6">
		<!-- <RouterLink to="/" @click="navigationState.toggleNavigation">
			<IconLogo class="fill-silver w-20" />
		</RouterLink> -->
        
        <ul class="contact-icons flex justify-end gap-10 flex-grow">
			<li>
				<RouterLink to="#">
                    <EmailIcon class="fill-silver h-4 text-coal" />
                </RouterLink>
			</li>

            <li>
                <a href="https://www.twitter.com/42mrrw/">
                    <TwitterIcon class="fill-silver h-4 text-coal" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/company/42mrrw/">
                    <LinkedinIcon class="fill-silver h-4 text-coal" />
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/42mrrw/">
                    <InstagramIcon class="fill-silver h-4 text-coal" />
                </a>
            </li>
		</ul>
	</div>
</template>
