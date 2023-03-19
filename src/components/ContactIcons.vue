<script>
import EmailIcon from "./icons/IconEmail.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import TwitterIcon from "./icons/IconTwitter.vue";
import { RouterLink } from "vue-router";
import { useNavigationStore } from "@/stores/navigation";

export default {
	name: "ContactIcons",
	components: {
		EmailIcon,
		LinkedinIcon,
		InstagramIcon,
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
	<div class="flex items-center justify-between gap-5 pt-8 pb-6 px-8">
		<!-- <RouterLink to="/" @click="navigationState.toggleNavigation">
			<IconLogo class="fill-silver w-20" />
		</RouterLink> -->
		<!-- <p class="mb-0 text-gray-500 font-light text-base">Kontakt</p> -->

		<ul class="contact-icons flex justify-start gap-8 flex-grow">
			<li>
				<button type="button" class="text-silver modal-toggle">
					<EmailIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</button>
			</li>

			<li>
				<a href="https://twitter.com/42mrrw"
                target="_blank" class="text-silver">
					<TwitterIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>

			<li>
				<a
					href="https://linkedin.com/company/42mrrw/"
                    target="_blank"
					class="text-silver"
				>
					<LinkedinIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>

			<li>
				<a href="https://instagram.com/42mrrw/"
                target="_blank" class="text-silver">
					<InstagramIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>
		</ul>
	</div>
</template>
