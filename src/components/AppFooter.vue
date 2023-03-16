<script>
import { RouterLink } from "vue-router";
import IconLogoMini from "./icons/IconLogoMini.vue";
import IconLogo from "./icons/IconLogo.vue";

export default {
	name: "AppFooter",
	components: {
		RouterLink,
		IconLogoMini,
		IconLogo,
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
			const navigation = document.querySelector(".nav ul");
			const navigationItems = navigation.querySelectorAll("a");
			const navigationLinks = [];

			navigationItems.forEach((item) => {
				const linkText = item.innerText;
				const linkHref = item.getAttribute("href");
				navigationLinks.push({ linkText, linkHref });
			});

			return navigationLinks;
		},

		getContactIcons() {
			const contact = document.querySelector("nav .contact-icons");
			const contactItems = contact.querySelectorAll("li a");
			const contactIcons = [];

			contactItems.forEach((item) => {
				contactIcons.push(item);
			});

			return contactIcons;
		},

		outputContactIcons() {
			const contact = document.querySelector("footer .contact-icons");
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
};
</script>

<template>
	<footer
		class="bg-black px-5 py-10 flex flex-col gap-10 justify-end"
	>
		<!-- <div class="absolute w-full h-full bottom-0 left-0 z-10">
			<img
				loading="lazy"
				src="/sunrise-over-Earth_1600.jpg"
				alt="Globe from outta space"
				class="z-10 block"
			/> -->
			<!-- <div class="bg-gradient-to-r from-[rgba(0,0,0,.80)] to-transparent z-20 absolute w-full h-full top-0 left-0"></div> -->
		<!-- </div> -->

		<div class="drop-shadow-md z-20 md:flex md:flex-wrap md:gap-28 md:justify-between max-w-screen-lg md:w-full md:mx-auto">
			<div class="flex flex-col gap-10 justify-start mt-10 max-w-[75px] md:max-w-none md:mt-0 md:order-2">
				<RouterLink to="/">
					<IconLogoMini class="fill-snow md:hidden" />
					<IconLogo class="fill-snow hidden md:inline-block md:w-full md:h-full md:h-14" />
				</RouterLink>
			</div>

			<div class="flex flex-col gap-5 md:order-1">
				<p class="font-medium mt-5 md:mt-0 text-base m-0">
					Gemeinsam für ein<br /><span
						class="text-rich-electric-blue font-medium"
						>besseres Morgen</span
					>.
				</p>

				<p class="font-medium text-base m-0">
					Lass uns zusammen <br />handeln.
				</p>

				<div class="contact-icons flex w-full gap-8 drop-shadow mt-4"></div>

				<div class="mt-5">
					<p class="font-medium text-sm text-moon mb-2">Image Credits: <a href="#" class="underline font-medium text-sm">Unsplash</a></p>
					<p class="font-medium text-sm text-moon mb-2">Copyright fortomorrow © 2023</p>
				</div>
			</div>
		</div>

		<!--<div class="z-20 opacity-60">
			

			 <ul>
				<li>
					<a href="#" class="text-sm"
						>Bild #1: Lawrence Aritao, Unsplash</a
					>
				</li>
				<li>
					<a href="#" class="text-sm"
						>Bild #2: Markus Spiske, Unsplash</a
					>
				</li>
				<li>
					<a href="#" class="text-sm"
						>Bild #3: Eleonore Kemmel, Unsplash</a
					>
				</li>
				<li>
					<a href="#" class="text-sm"
						>Bild #4: Clarisse Meyer, Unsplash</a
					>
				</li>
				<li>
					<a href="#" class="text-sm"
						>Bild #5: Mykhailo Kopyt, Unsplash</a
					>
				</li>
			</ul>
		</div>-->
	</footer>
</template>

<style>
    footer .contact-icons a svg {
        @apply !h-4;
    }

	footer .contact-icons a {
		@apply bg-snow p-1 rounded text-black opacity-75;
	}
</style>