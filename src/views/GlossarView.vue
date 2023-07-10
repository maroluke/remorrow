<script>
import ItemContent from "@partials/glossar/ItemContent.vue";
import { Accordion } from "flowbite";
import { useRoute } from "vue-router";

export default {
	name: "GlossarView",
	components: {
		ItemContent,
	},

	data() {
		return {
			accordion: null,
			accordionItems: null,
			accordionOptions: null,
			route: useRoute(),
		};
	},

	mounted() {
		this.accordionItems = [
			{
				id: "accordion-nachhaltig",
				triggerEl: document.querySelector("#nachhaltig"),
				targetEl: document.querySelector("#accordion-body-nachhaltig"),
				active: false,
			},
			{
				id: "accordion-klimaneutral",
				triggerEl: document.querySelector("#klimaneutral"),
				targetEl: document.querySelector(
					"#accordion-body-klimaneutral"
				),
				active: false,
			},
			{
				id: "accordion-klimapositiv",
				triggerEl: document.querySelector("#klimapositiv"),
				targetEl: document.querySelector(
					"#accordion-body-klimapositiv"
				),
				active: false,
			},
			{
				id: "accordion-regenerativ",
				triggerEl: document.querySelector("#regenerativ"),
				targetEl: document.querySelector("#accordion-body-regenerativ"),
				active: false,
			},
			{
				id: "accordion-positiver-impact",
				triggerEl: document.querySelector("#positiver-impact"),
				targetEl: document.querySelector(
					"#accordion-body-positiver-impact"
				),
				active: false,
			},
			{
				id: "accordion-zukunftsorientiert",
				triggerEl: document.querySelector("#zukunftsorientiert"),
				targetEl: document.querySelector(
					"#accordion-body-zukunftsorientiert"
				),
				active: false,
			},
			{
				id: "accordion-schoen",
				triggerEl: document.querySelector("#schoen"),
				targetEl: document.querySelector("#accordion-body-schoen"),
				active: false,
			},
			{
				id: "accordion-projekte",
				triggerEl: document.querySelector("#projekte"),
				targetEl: document.querySelector("#accordion-body-projekte"),
				active: false,
			},
		];

		this.accordionOptions = {
			alwaysOpen: true,
			activeClasses: "bg-gray-100 text-gray-900",
			inactiveClasses: "text-gray-500",
			transitionDuration: 300,
		};

		this.accordion = new Accordion(
			this.accordionItems,
			this.accordionOptions
		);

		if (this.route.hash) {
			this.accordion.open(
				`accordion-${this.route.hash.replace("#", "")}`
			);
		}
	},
};
</script>

<template>
	<main class="bg-white">
		<section
			class="pt-20 pb-10 bg-no-repeat bg-cover text-coal max-w-screen-lg mx-auto sm:pt-44 px-6 xl:px-16"
		>
			<h1 class="py-5">Glossar</h1>

			<div class="text-coal bg-snow px-6 py-5 -mx-6 sm:mx-0 sm:rounded-lg">
				<ItemContent :index="'nachhaltig'">
					<template #title>Nachhaltig</template>
					<template #paragraph>
						<div class="flex flex-col md:gap-10 md:flex-row">
							<div class="flex-1 order-2 md:order-1">
								<span class="block pb-5">
									Zur Definition von Nachhaltigkeit stützen
									wir uns auf das 3-Säule-Modell.
								</span>

								<span class="block pb-5">
									Die Säule der ökologischen Nachhaltigkeit
									befasst sich mit dem Erhalt der Natur und
									Umwelt für die nachfolgende Generation.
								</span>

								<span class="block pb-5">
									Die Säule der ökonomischen Nachhaltigkeit
									umfasst eine Wirtschaftsweise, welche die
									natürlichen Ressourcen nicht ausbeutet,
									langfristig tragfähig ist und Grundlage für
									allgemeinen Wohlstand ist.
								</span>

								<span class="block pb-5">
									Die Säule der sozialen Nachhaltigkeit setzt
									weniger auf die Gerechtigkeit zwischen den
									Generationen, als vielmehr auf die
									Gerechtigkeit zwischen dem Norden und Süden
									der Welt. Dabei sollen die Grundbedürfnisse
									aller Menschen gesichert und den Zugang zu
									den Ressourcen dieser Welt gerecht verteilt
									sein.
								</span>

								<a
									href="https://nachhaltigleben.ch"
									target="_blank"
									class="underline"
									>Siehe nachhaltigleben.ch</a
								>

								<span class="mt-10 block">
									Bei 42morrow sprechen wir von nachhaltigen
									Projekten, wenn die folgenden Aspekte und
									Kriterien (aus unserer Perspektive) erfüllt
									sind:
									<ul
										class="pl-5 mt-5 list-disc flex flex-col gap-3"
									>
										<li class="pl-2 font-bold">
											Einklang mit den drei Dimensionen /
											Säulen der Nachhaltigkeit (siehe
											oben).
										</li>
										<li class="pl-2 font-bold">
											Dürfen sie sich bei der Definition
											der Projektziele nicht auf
											wirtschaftliche Ziele (Termine,
											Kosten, Projektergebnis)
											beschränken.
											<a
												href="https://www.hermes.admin.ch/de/projektmanagement/verstehen/hinweise-zur-anwendung/nachhaltigkeit.htm"
												target="_blank"
												class="block underline"
												>Siehe Hermes</a
											>
										</li>
										<li class="pl-2 font-bold">
											Mindestens ein primäres SDG wurde
											festgelegt, in dem das Projekt eine
											positive Wirkung erzielt und sich
											aktiv daran ausrichtet.
										</li>
									</ul>
								</span>

								<span class="mt-10 block">
									Uns ist bewusst, dass diese Einordnung
									(nachhaltig oder nicht) in manchen Fällen
									schwierig ist, speziell wenn positive
									Wirkung in der einen Säule und negative
									Wirkung in einer anderen einander
									gegenüberstehen (Konflikt).
								</span>
							</div>

							<div class="flex-1 flex flex-col gap-5 order-1 mb-5 sm:flex-row md:mb-0 md:order-2 md:flex-col">
								<figure
									class="shadow flex flex-col p-5 bg-white rounded-lg flex-1 md:flex-none self-center md:self-start"
								>
									<img
										loading="lazy"
										src="/nachhaltig.jpg"
										alt="Nachhaltigkeit"
										class="w-full max-w-sm"
									/>
									<footer class="mt-3">
										<small
											>Quelle:
											<a
												rel="license"
												href="https://abwassernetzwerk-rheinland.nrw/nachhaltigkeit/"
												class="underline"
												>abwassernetzwerk-rheinland.nrw</a
											></small
										>
									</footer>
									<!-- <figcaption>Caption goes here</figcaption> -->
								</figure>

								<figure
									class="shadow flex flex-col p-5 bg-white rounded-lg flex-1 md:flex-none self-center md:self-start"
								>
									<img
										loading="lazy"
										src="/sdg.jpg"
										alt="Sustainable Development Goals"
										class="w-full max-w-sm"
									/>
									<footer class="mt-3">
										<small
											>Quelle:
											<a
												rel="license"
												href="https://primecapital-ag.com/un-sdgs/"
												class="underline"
												>primecapital-ag.com</a
											></small
										>
									</footer>
									<!-- <figcaption>Caption goes here</figcaption> -->
								</figure>
							</div>
						</div>
					</template>
				</ItemContent>
				
				<ItemContent :index="'klimaneutral'">
					<template #title>Klimaneutral</template>
					<template #paragraph>
						<span class="mb-5 block">
							Aktivitäten sind klimaneutral oder CO2-neutral, wenn
							sie keine Treibhausgasemissionen verursachen, das
							Klima also nicht belasten.
							<a
								href="https://www.myclimate.org/de/informieren/faq/faq-detail/was-ist-klimaneutralitaet/"
								target="_blank"
								class="block underline"
								>Quelle myclimate</a
							>
						</span>

						<span class="mb-5 block">
							re:morrow nimmt die Definition von myclimate als
							Grundlage zur Definition dieses Begriffs. Wo immer
							möglich, soll versucht werden, die Perspektive nicht
							alleine auf CO2-Emissionen zu beschränken, sondern
							auch andere Emissionen wie z.B. Methan zu
							betrachten.
						</span>
					</template>
				</ItemContent>
				
				<ItemContent :index="'klimapositiv'">
					<template #title>Klimapositiv</template>
					<template #paragraph>
						<span class="mb-5 block">
							Werden mehr Treibhausgasemissionen (vorwiegend CO2)
							eingespart oder kompensiert als verwendet wurden,
							kann grundsätzlich von Klimapositivität gesprochen
							werden. Dieses «mehr» wird bei 42morrow mit 50%
							definiert.
						</span>
						<span class="mb-5 block">
							Kompensiert ein Projekt demnach mehr als die Hälfte
							der verbrauchten THG (inkl. CO2) zusätzlich zu 100%
							der verursachten THG/CO2 Emissionen, ist dieses
							Projekt – in unserem Sinne – klimapositiv.
						</span>
					</template>
				</ItemContent>
				
				<ItemContent :index="'regenerativ'">
					<template #title>Regenerativ</template>
					<template #paragraph>
						<span class="mb-5 block">
							Regenerativ im wirtschaftlichen Sinne verkörpert
							einen ganzheitlichen, systemischen Ansatz, der auf
							den Prinzipien natürlicher Lebensweisen beruht. Im
							Gegensatz zu nachhaltigen gehen regenerative
							Geschäftsmodelle einen Schritt weiter: Sie sind auf
							das sukzessive Wiederherstellen von Ressourcen
							ausgerichtet und dienen damit dem gesamten Ökosystem
							und den darin eingebetteten lebenden Systemen.
						</span>

						<figure
							class="shadow flex flex-col p-5 mb-5 bg-white rounded-lg"
						>
							<img
								loading="lazy"
								src="/regenerative-business.jpg"
								alt="Nachhaltigkeit"
								class="w-full"
							/>
							<footer>
								<small
									>Quelle:
									<a
										rel="license"
										href="https://www.thedive.com/de/angebot/regenerative-business"
										class="underline"
										>thedive.com</a
									></small
								>
							</footer>
							<!-- <figcaption>Caption goes here</figcaption> -->
						</figure>

						<span class="mb-5 block">
							Die Begriffe regenerativ und klimapositiv sind bei
							42morrow eng miteinander verknüpft. Während ein
							klimapositives Projekt eine regenerative Wirkung auf
							die Umwelt und unseren Planeten hat, ist ein
							regeneratives Projekt tendenziell noch breiter
							aufgestellt, was dessen positive Wirkung anbelangt.
						</span>

						<span class="mb-5 block">
							Die Regeneration ist dabei nicht alleine auf die
							Umwelt bezogen, sondern kann sich auch in
							ökonomischer und sozialen Dimension auswirken. Sie
							ist zudem eng mit der Vision und dem Purpose des
							Projektes verbunden und darin entsprechend
							verankert.
						</span>

						<figure
							class="shadow flex flex-col p-5 mb-5 bg-white rounded-lg"
						>
							<img
								loading="lazy"
								src="/regenerative-economy-flow.jpg"
								alt="Nachhaltigkeit"
								class="w-full"
							/>
							<footer>
								<small
									>Quelle:
									<a
										rel="license"
										href="https://www.neuenarrative.de/magazin/klimakolumne-wie-regenerative-wirtschaft-aussieht/"
										class="underline"
										>neuenarrative.de</a
									></small
								>
							</footer>
							<!-- <figcaption>Caption goes here</figcaption> -->
						</figure>

						<span class="mb-5 block">
							Speziell bei Projekten, die in ihren Kernprozessen
							mit Materialien, Rohstoffen und Energien arbeiten,
							wird durch die angestrebte Regeneration eine
							zirkuläre Wirtschaft gefördert.
						</span>
					</template>
				</ItemContent>
				
				<ItemContent :index="'positiver-impact'">
					<template #title>Positiver Impact</template>
					<template #paragraph>
						<span class="mb-5 block">
							Die Definition von positivem Impact oder Wirkung
							stützen wir auf die folgende, aus unserer Sicht sehr
							treffende, Grundlage:
						</span>

						<span class="mb-5 block">
							Eine Aktivität hat
							<ul class="pl-5 mt-5 list-disc flex flex-col gap-3">
								<li class="pl-2 font-bold">
									eine positive Auswirkung auf mindestens eine
									der 3 Säulen der nachhaltigen Entwicklung
									(Ökologie, Soziales und Ökonomie).
								</li>
								<li class="pl-2 font-bold">
									ein angemessenes Management der potenziellen
									negativen Auswirkungen.
								</li>
							</ul>
						</span>

						<span class="mb-5 block">
							Quelle:
							<a
								href="https://www.societegenerale.com/sites/default/files/documents/positive-impact-bond/2016/Positive-Impact-Assessment-Framework.pdf"
								target="_blank"
								class="underline"
								>societegenerale.com</a
							>
						</span>
					</template>
				</ItemContent>
				
				<ItemContent :index="'zukunftsorientiert'">
					<template #title>Zukunftsorientierung</template>
					<template #paragraph>
						<span class="mb-5 block">
							Wir verstehen diesen Begriff primär auf Ideen,
							Projekte und Unternehmen bezogen.
						</span>

						<span class="mb-5 block">
							Richtet sich eine Handlung an der Zukunft aus, nimmt
							Trends und Prognosen aktiv in seine Planung und
							Entwicklung mit auf und versucht zu identifizieren,
							welche Stellhebel morgen relevant sein werden,
							erachten wir bei 42morrow dies als
							zukunftsorientiert.
						</span>
					</template>
				</ItemContent>
				
				<ItemContent :index="'schoen'">
					<template #title>Schön</template>
					<template #paragraph>
						<div class="flex flex-col mb-10 md:gap-20 md:flex-row">
							<span class="mb-5 block flex-1">
								Ein schönes Projekt oder eine schöne
								Zusammenarbeit sind für uns etwas
								Grundsätzliches. Darin ist auch Kreativität,
								Ästhetik und Balance enthalten. Schönheit ist
								für uns «das Stimmige», wenn alles passt oder
								wenn sich Funktion und Design in einem
								Gleichgewicht befinden. Aus diesem Grund gehört
								für uns Schönheit zur Basis und zum Fundament,
								was re:morrow verkörpern soll.
							</span>

							<figure class="flex-1">
								<span
									class="mb-5 block text-2xl before:content-['“'] after:content-['”']"
								>
									Schönheit ist nicht nur ein Luxus, sondern
									ein elementares menschliches Bedürfnis.
								</span>

								<small class="italic">– Alan Moore</small>
							</figure>
						</div>

						<div class="flex flex-col md:gap-20 md:flex-row">
							<span class="mb-5 block flex-1">
								Der Autor des obigen Zitats, Alan Moore,
								beschreibt die Wirkung von Design sogar auf
								diese Weise: «Design wirkt sich auf alle
								Lebensbereiche aus, es hat das Potenzial,
								Gesellschaften zu prägen und zu verändern, und
								ist weniger eine Frage der Technik als eine der
								Geisteshaltung.».
							</span>

							<figure class="flex-1">
								<span
									class="mb-5 block text-2xl before:content-['“'] after:content-['”']"
								>
									It Beauty expresses the idea that we can
									seek the good and manifest it in all that we
									create in this world.
								</span>

								<small class="italic"
									>– Alan Moore, Do Build, S. 16</small
								>
							</figure>
						</div>

						<iframe
							width="560"
							height="315"
							src="https://www.youtube-nocookie.com/embed/NTRwLMIWrbI?controls=0&amp;start=72"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
							class="mx-auto mt-10 max-w-full"
						></iframe>
					</template>
				</ItemContent>
				
				<ItemContent :index="'projekte'">
					<template #title>Projekte</template>
					<template #paragraph>
						<span class="mb-5 block">
							Ein Projekt bei re:morrow ist... ein Vorhaben,
							Produkt oder eine Dienstleistung, welche einen
							Beitrag zur Erreichung der Klimaneutralität
							respektive -positivität leisten.
						</span>
					</template>
				</ItemContent>
			</div>
		</section>
	</main>
</template>

<style scoped></style>
