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
        TwitterIcon,
        IconLogo,
        RouterLink,
    },
    setup() {
        const navigationState = useNavigationStore();
        return { navigationState };
    },  
};
</script>

<template>
	<div class="flex items-center justify-between gap-5 pt-5 pb-4">
		<RouterLink to="/" @click="navigationState.toggleNavigation">
			<IconLogo class="fill-silver w-20" />
		</RouterLink>

		<!-- divider -->
		<!-- <div class="w-0.5 h-10 bg-silver opacity-10"></div> -->

		<ul class="contact-icons flex justify-end gap-6 flex-grow">
			<li>
				<RouterLink to="#">
                    <EmailIcon class="fill-silver h-4 text-coal" />
                </RouterLink>
			</li>

			<li>
				<a href="https://www.instagram.com/42mrrw/">
                    <InstagramIcon class="fill-silver h-4 text-coal" />
                </a>
			</li>

            <li>
                <a href="https://www.linkedin.com/company/42mrrw/">
                    <LinkedinIcon class="fill-silver h-4 text-coal" />
                </a>
            </li>
			<!-- <li>
				<a href="#"
					><TwitterIcon class="stroke-silver h-4 text-coal"
				/></a>
			</li> -->
		</ul>
	</div>
</template>
