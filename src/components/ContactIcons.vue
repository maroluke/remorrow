<script>
import EmailIcon from "./icons/IconEmail.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import InstagramIcon from "./icons/IconInstagram.vue";
import XIcon from "./icons/IconX.vue";
import { RouterLink } from "vue-router";
import { useNavigationStore } from "@/stores/navigation";

export default {
	name: "ContactIcons",
	components: {
		EmailIcon,
		LinkedinIcon,
		InstagramIcon,
		RouterLink,
		XIcon,
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
				<button
					@click="navigationState.toggleModal"
					type="button"
					class="text-silver"
				>
					<EmailIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</button>
			</li>

			<li>
				<a
					href="https://twitter.com/remorrow_world"
					target="_blank"
					class="text-silver"
				>
					<XIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>

			<li>
				<a
					href="https://linkedin.com/company/remorrow/"
					target="_blank"
					class="text-silver"
				>
					<LinkedinIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>

			<li>
				<a
					href="https://instagram.com/remorrow.world/"
					target="_blank"
					class="text-silver"
				>
					<InstagramIcon
						class="h-5 text-inherit hover:fill-rich-electric-blue"
					/>
				</a>
			</li>
		</ul>
	</div>
</template>
