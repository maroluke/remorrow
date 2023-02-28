<script>
import ItemContent from "@partials/glossar/ItemContent.vue";
import { initAccordions } from "flowbite";

export default {
	name: "GlossarView",
	components: {
		ItemContent,
	},

	mounted() {
		initAccordions(); // Initialize accordions
	}
};
</script>

<template>
	<main class="bg-white">
		<section class="pt-24 pb-10 bg-no-repeat bg-cover text-coal">
			<h1 class="p-5">Glossar</h1>

			<div id="accordion-open" data-accordion="close" class="text-coal">
				<ItemContent :index="0">
					<template #title>Nachhaltigkeit</template>
					<template #paragraph>
						Zur Definition von Nachhaltigkeit stützen wir uns auf das 3-Säule-Modell. 
					</template>
				</ItemContent>

				<ItemContent :index="1">
					<template #title>Klimaneutral</template>
					<template #paragraph>
						Aktivitäten sind klimaneutral oder CO2-neutral, wenn sie keine Treibhausgasemissionen verursachen, das Klima also nicht belasten.
					</template>
				</ItemContent>

				<ItemContent :index="2">
					<template #title>Klimapositiv</template>
					<template #paragraph>
						Werden mehr Treibhausgasemissionen (vorwiegend CO2) eingespart oder kompensiert als verwendet wurden, kann grundsätzlich von Klimapositivität gesprochen werden. Dieses «mehr» wird bei 42morrow mit 50% definiert. Kompensiert ein Projekt demnach mehr als die Hälfte der verbrauchten THG (inkl. CO2) zusätzlich zu 100% der verursachten THG/CO2 Emissionen, ist dieses Projekt – in unserem Sinne – klimapositiv.
					</template>
				</ItemContent>

				<ItemContent :index="3">
					<template #title>Regenerativ</template>
					<template #paragraph>
						Regenerativ im wirtschaftlichen Sinne verkörpert einen ganzheitlichen, systemischen Ansatz, der auf den Prinzipien natürlicher Lebensweisen beruht. Im Gegensatz zu nachhaltigen gehen regenerative Geschäftsmodelle einen Schritt weiter: Sie sind auf das sukzessive Wiederherstellen von Ressourcen ausgerichtet und dienen damit dem gesamten Ökosystem und den darin eingebetteten lebenden Systemen.
					</template>
				</ItemContent>

				<ItemContent :index="4">
					<template #title>Positiver Impact</template>
					<template #paragraph>
						Die Definition von positivem Impact oder Wirkung stützen wir auf die folgende, aus unserer Sicht sehr treffende, Grundlage:
					</template>
				</ItemContent>
				
				<ItemContent :index="5">
					<template #title>Zukunftsorientierung</template>
					<template #paragraph>
						Wir verstehen diesen Begriff primär auf Ideen, Projekte und Unternehmen bezogen.
						Richtet sich eine Handlung an der Zukunft aus, nimmt Trends und Prognosen aktiv in seine Planung und Entwicklung mit auf und versucht zu identifizieren, welche Stellhebel morgen relevant sein werden, erachten wir bei 42morrow dies als zukunftsorientiert.
					</template>
				</ItemContent>
				
				<ItemContent :index="6">
					<template #title>Schön</template>
					<template #paragraph>
						Schönheit ist nicht nur ein Luxus, sondern ein elementares menschliches Bedürfnis.
					</template>
				</ItemContent>
			</div>

			<!-- <ul class="flex flex-col">
				<li class="text-coal border-b relative">
					<ItemContent />
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Klimaneutral
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Klimapositiv
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Regenerativ
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Positiver Impact
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Zukunftsorientierung
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
				<li class="font-medium flex justify-between text-coal border-b pb-5 last:border-b-0">
					Schön
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
				</li>
			</ul> -->
		</section>
	</main>
</template>

<style scoped></style>
