<script setup>
import { ref } from "vue";
import { useNavigationStore } from "@/stores/navigation";
import { onMounted } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import SquircleButton from "@components/SquircleButton.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SubscriptionModal from "@components/SubscriptionModal.vue";
import {
	Sparkles,
	Bean,
	Sprout,
	TreeDeciduous,
	Pointer,
} from "lucide-vue-next";
import Plan5 from "@/assets/media/animations/plan-sun.json";
import Plan10 from "@/assets/media/animations/plan-ecological.json";
import Plan20 from "@/assets/media/animations/plan-pathway.json";
import Plan50 from "@/assets/media/animations/plan-wind.json";

const navigationState = useNavigationStore();

const lottieRefs = ref([]);

const playAnimation = (index) => {
	console.log(lottieRefs.value[index]);
	lottieRefs.value[index]?.play();
};

const stopAnimation = (index) => {
	lottieRefs.value[index]?.stop();
};

const iconMap = {
	sparkles: Plan5,
	bean: Plan10,
	sprout: Plan20,
	tree: Plan50,
};

const data = {
	header: {
		title: "Supporter werden",
		paragraph:
			"Mit einem kleinen Monatsbeitrag wirst du zum re:morrow-Supporter, Teil unserer Community und unterstützt uns aus der Ferne. Wir sind bootstrapped (d.h. eigenfinanziert, ohne externe Investoren), daher entlasten uns bereits ein paar Franken pro Monat und ermöglichen re:morrow selbst ein gesundes und stabiles Wachstum.",
	},
	section1: {
		title: "Wie du unterstützen kannst",
		subscription: [
			{
				title: "Lichtblick",
				paragraph:
					"Mit nur CHF 5 pro Monat zeigst du, dass Veränderung möglich ist – ganz nach dem Motto: «Steter Tropfen höhlt den Stein».",
				icon: "sparkles",
				price: 5,
			},
			{
				title: "Starker Wille",
				paragraph:
					"CHF 10 klingen nicht nach viel, doch sie stehen für deinen festen Glauben an eine bessere Zukunft – «Wo ein Wille, da ein Weg».",
				icon: "bean",
				price: 10,
			},
			{
				title: "Mut-Macher",
				paragraph:
					"Du gehst einen Schritt weiter! Mit CHF 20 pro Monat schenkst du nicht nur Hoffnung, sondern auch Mut, sodass re:morrow weiter wachsen kann.",
				icon: "sprout",
				price: 20,
			},
			{
				title: "Wegbereiter",
				paragraph:
					"Ein Mensch, der nicht nur träumt, sondern auch macht. Wer CHF 50 pro Monat gibt, packt richtig an und ebnet den Weg für Neues. Eigentlich gehörst du damit schon fast in unser Team!",
				icon: "tree",
				price: 50,
			},
		],
		bonus: {
			title: "Übrigens",
			paragraph:
				"Auch Unternehmen und Organisationen können uns mit individuellen Beiträgen, resp. unverbindlichen Einmalspenden, unterstützen. Meldet euch bei Interesse, da wir gemeinsam auch in die Richtung spannender Sponsoring-Pakete gehen können. ;-)",
		},
	},
	section2: {
		title: "Gemeinnützigkeit",
		paragraph:
			"Wir sind aktuell nicht als gemeinnütziger Verein eingetragen, aus diesem Grund dürfen wir keine Spendenbescheinigungen ausstellen, die von den Steuern abgesetzt werden können. Sollte sich dies jedoch zu einem echten Bedarf entwickeln, prüfen wir die dafür notwendigen Schritte gerne. ",
	},
	section3: {
		title: "Heroes",
		paragraph:
			"Es gibt viele Möglichkeiten um Projekte & Startups zu unterstützen. Nebst unseren eigenen Netzwerken, der Reichweite von re:morrow selbst oder Partnern greifen wir auch auf einen Pool von Menschen zurück, die ihre Fähigkeiten & ihr Wissen für solche Momente bereitstellen. Menschen, die offen dafür sind, zu helfen, wenn sie es können. Das sind unsere Heroes.",
	},
	section4: {
		title: "Fakt ist",
		paragraph:
			"Wir befinden uns auf einer Reise und an den Erfahrungen werden wir wachsen. Willst du uns begleiten und den Weg gemeinsam gestalten? Du willst dich engagieren, um etwas Positives zu bewirken, weisst aber nicht wie genau – dann bist du bei uns richtig.",
	},
	section5: {
		title: "Werde Teil dieser wachsenden Community.",
		button: "Melde dich",
		contact: true,
		icon: "mail",
	},
};

// query the url parameter query. it can be 1 or 0
const paid = new URLSearchParams(window.location.search).get("paid");

onMounted(() => {
	if (paid) {
		navigationState.toggleModal("#subscription-modal");
	}
});
</script>

<template>
	<main class="bg-dark">
		<JumboHeader
			:classes="'bg-bottom'"
			:src="'lawrence-aritao-k2sTHzAnmfY-unsplash.jpg'"
		>
			<template #title>{{ data.header.title }}</template>

			<template #paragraph>{{ data.header.paragraph }}</template>
		</JumboHeader>

		<div class="sm:bg-snow md:bg-dark md:flex md:justify-center">
			<div
				class="max-w-screen-2xl sm:flex sm:p-10 sm:items-center sm:gap-10 md:gap-20 xl:gap-32 md:items-center md:justify-center xl:p-0"
			>
				<section
					id="subscription"
					class="px-5 py-10 bg-dark grow md:py-20 md:flex md:justify-center text-snow sm:p-0 md:flex-initial sm:bg-snow sm:text-dark md:bg-dark md:text-snow"
				>
					<div>
						<h2 class="text-center sm:mb-20">
							{{ data.section1.title }}
						</h2>

						<div>
							<div
								class="grid mt-10 sm:gap-16 xl:gap-4 md:grid-cols-2 xl:grid-cols-4 xl:p-4"
							>
								<div
									v-for="(item, i) in data.section1
										.subscription"
									:key="i"
									class="p-4 pt-4 text-snow flex-1 flex flex-col min-w-screen-2x -mx-5 sm:mx-0 sm:rounded-xl"
									:class="{
										'bg-dark-sky-blue': i === 0,
										'bg-macaroni-and-cheese': i === 1,
										'bg-burning-orange': i === 2,
										'bg-caribbean-green': i === 3,
									}"
									@mouseenter="playAnimation(i)"
									@mouseleave="stopAnimation(i)"
								>
									<div
										class="flex flex-col justify-between items-center md:mb-5"
									>
										<div
											v-if="item.icon"
											class="flex flex-col items-center justify-center rounded-full bg-white border-4 sm:-mt-14"
											:class="{
												'border-dark-sky-blue': i === 0,
												'border-macaroni-and-cheese':
													i === 1,
												'border-burning-orange':
													i === 2,
												'border-caribbean-green':
													i === 3,
											}"
										>
											<!-- <img
														:src="iconMap[item.icon]"
														alt="profileName"
														class="order-2 sm:order-1 w-24"
													/> -->
											<Vue3Lottie
												ref="lottieRefs"
												:animationData="
													iconMap[item.icon]
												"
												:height="72"
												:width="72"
												:auto-play="false"
												:loop="false"
											/>
										</div>

										<h2
											class="mb-2 text-center"
											v-html="item.title"
										></h2>
									</div>

									<p class="grow font-bold">
										{{ item.paragraph }}
									</p>

									<div
										class="flex flex-col justify-start items-start"
									>
										<p
											class="flex justify-start items-end mb-0 gap-2"
										>
											<span
												class="order-2 mb-4 leading-none font-bold"
												>CHF / Monat</span
											>

											<span
												class="text-[6rem] font-bold leading-none order-1"
												>{{ item.price }}</span
											>
										</p>

										<SquircleButton
											:classes="'bg-snow'"
											:to="`https://remorrow.payrexx.com/de/pay?cid=0cf7b5ef&donation[preselect_amount]=${item.price}&hide_description=1`"
											:externalLink="true"
											class="!max-w-none w-full"
										>
											<template #buttonRef
												>Jetzt unterstützen</template
											>
										</SquircleButton>
									</div>
								</div>
							</div>

							<div
								class="mt-20 md:border border-coal md:p-10 rounded-xl max-w-screen-lg mx-auto flex flex-col"
							>
								<h3 class="mb-5 flex items-center gap-4">
									<Pointer class="w-8 h-8 stroke-2" />
									{{ data.section1.bonus.title }}
								</h3>

								<p>
									{{ data.section1.bonus.paragraph }}
								</p>

								<SquircleButton
									:icon="'mail'"
									@click="
										navigationState.toggleModal(
											'#contact-modal',
										)
									"
									class="mt-5 w-full"
								>
									<template #buttonRef
										>Kontaktiere uns</template
									>
								</SquircleButton>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>

		<section
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-dark md:flex md:justify-center md:p-20"
		>
			<TitleParagraphItem
				class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start"
			>
				<template #title>{{ data.section2.title }}</template>
				<template #paragraph>
					<p>{{ data.section2.paragraph }}</p>
				</template>
			</TitleParagraphItem>
		</section>
	</main>

	<SubscriptionModal :paid="paid === 'true'" />
</template>
