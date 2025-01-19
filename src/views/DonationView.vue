<script setup>
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
import { useNavigationStore } from "@/stores/navigation";
import { onMounted } from "vue";

const navigationState = useNavigationStore();

const iconMap = {
	sparkles: Sparkles,
	bean: Bean,
	sprout: Sprout,
	tree: TreeDeciduous,
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
				title: `${"Hoffnungs&shy;schimmer"}`,
				paragraph:
					"Mit nur CHF 5 pro Monat zeigst du, dass Veränderung möglich ist – ganz nach dem Motto: «Steter Tropfen höhlt den Stein».",
				icon: "sparkles",
				price: 5,
			},
			{
				title: "Starker Wille<br><br>",
				paragraph:
					"CHF 10 klingen nicht nach viel, doch sie stehen für deinen festen Glauben an eine bessere Zukunft – «Wo ein Wille, da ein Weg».",
				icon: "bean",
				price: 10,
			},
			{
				title: "Mut-Macher<br><br>",
				paragraph:
					"Du gehst einen Schritt weiter! Mit CHF 20 pro Monat schenkst du nicht nur Hoffnung, sondern auch Mut, sodass re:morrow weiter wachsen kann.",
				icon: "sprout",
				price: 20,
			},
			{
				title: "Wegbereiter<br><br>",
				paragraph:
					"Ein Mensch, der nicht nur träumt, sondern direkt mit anpackt. Wer CHF 50 pro Monat gibt, packt richtig an und ebnet den Weg für Neues. Eigentlich gehörst du damit schon fast in unser Team!",
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
					class="px-5 py-10 bg-snow grow md:py-20 md:flex md:justify-center text-dark sm:p-0 md:flex-initial md:bg-dark md:text-snow"
				>
					<TitleParagraphItem :center="true">
						<template #title>{{ data.section1.title }}</template>
						<template #paragraph>
							<div
								class="grid md:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10 xl:p-4"
							>
								<div
									v-for="(item, i) in data.section1
										.subscription"
									:key="i"
									class="p-4 pt-10 text-snow flex-1 rounded-xl flex flex-col min-w-screen-2x"
									:class="{
										'bg-dark-sky-blue': i === 0,
										'bg-macaroni-and-cheese': i === 1,
										'bg-burning-orange': i === 2,
										'bg-caribbean-green': i === 3,
									}"
								>
									<div
										class="flex flex-col justify-between items-center gap-5 md:mb-5"
									>
										<div
											v-if="item.icon"
											class="rounded-full p-2 flex flex-col items-center justify-center mt-1"
										>
											<component
												:is="iconMap[item.icon]"
												class="w-12 h-12 stroke-[1.5]"
											/>
										</div>

										<h2
											class="mb-2 text-center"
											v-html="item.title"
										></h2>
									</div>

									<p class="grow mb-10 font-bold">
										{{ item.paragraph }}
									</p>

									<div class="flex justify-between">
										<p
											class="flex flex-col justify-start items-start shrink w-24 mb-0"
										>
											<span class="text-sm order-2"
												>CHF / Monat</span
											>

											<span
												class="text-[4rem] font-bold leading-none order-1"
												>{{ item.price }}</span
											>
										</p>

										<div class="mt-1 w-52 lg:w-72 2xl:w-52">
											<SquircleButton
												:classes="'bg-snow'"
												:to="`https://remorrow.payrexx.com/de/pay?cid=0cf7b5ef&donation[preselect_amount]=${item.price}&hide_description=1`"
												:externalLink="true"
											>
												<template #buttonRef
													>Jetzt
													unterstützen</template
												>
											</SquircleButton>
										</div>
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
						</template>
					</TitleParagraphItem>
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
