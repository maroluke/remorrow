<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'lawrence-kayku-frWOcVisp8U-unsplash.jpg'">
			<template #title> Sei ein Teil davon </template>

			<template #paragraph>
				Wir sind der Meinung, dass wir miteinander nicht nur mehr
				bewirken, sondern auch aneinander wachsen können. Auf unserer
				Reise mit re:morrow freuen wir uns auf alle, die mit uns einen
				nachhaltig positiven Beitrag für eine hoffnungsvolle Zukunft
				leisten wollen.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:button="'Melde dich'"
				:contact="true"
				:icon="'mail'"
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title> Bist du Macher:in? </template>

				<template #paragraph>
					<p>
						Egal, ob du bereits gegründet hast oder es noch tun
						willst, ob du ein Projekt verantwortest oder einfach nur
						begeistert bist vom Potenzial einer neuen Idee, die zu
						einer lebenswerten Zukunft beitragen kann – wir sind
						überzeugt, dass wir perfekt zusammenpassen.
						<br /><br />
						Schreib uns einfach und wir finden gemeinsam heraus, wie
						wir dich am besten unterstützen können!
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				:button="'Let\'s talk'"
				:contact="true"
				:icon="'mail'"
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Unternehmen + Zukunft = Match?</template>

				<template #paragraph>
					<p>
						Dein Unternehmen oder deine Organisation möchte
						nachhaltige Startups unterstützen, fördern und
						innovative Kollaborationen erkunden? Wir helfen euch
						dabei, eure Leistungen und Expertise fokussiert
						bereitzustellen und so einen direkten Beitrag zu
						leisten. Meldet euch bei uns und wir begleiten euch
						dabei.
						<br /><br />
						Ihr möchtet noch mehr bewegen und eure
						Nachhaltigkeitsreise gemeinsam mit uns angehen? Wir
						bieten spezielle Sponsoring-Partnerschaften, um euren
						Beitrag weiter zu verstärken. Lass uns gerne darüber
						sprechen, wie wir gemeinsam eure Ziele erreichen können.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:button="'Melde dich'"
				:contact="true"
				:icon="'mail'"
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title
					>Anpacken und selbst bewegen – das geht auch!
				</template>

				<template #paragraph>
					<p>
						Du bist offen für Neues, willst deinen eigenen positiven
						Impact vergrössern, Teil von etwas Größerem sein,
						Gleichgesinnte treffen und neue Wege beschreiten?
						<br /><br />
						Dann freuen wir uns darauf, dich kennenzulernen und
						gemeinsam herauszufinden, wo du dich in unserer
						re:morrow-Community am besten entfalten kannst.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-coal md:py-20"
		>
			<TitleParagraphItem
				:button="'Jetzt unterstützen'"
				:link="'/supporter#subscription'"
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title
					>5 Franken und du spendest Hoffnung – auch ein Weg!
				</template>

				<template #paragraph>
					<p>
						Schon mit einer kleinen Spende kannst du uns aktiv
						helfen: Du entlastest uns beim Aufbau von re:morrow,
						ermöglichst die jährliche
						<RouterLink
							class="glossar-link"
							:to="{
								path: '/unser-weg',
							}"
							>match:make</RouterLink
						>
						und stärkst unsere Sichtbarkeit! Liest sich etwas
						«abgeluscht», ist aber so: Jeder Beitrag, ob gross oder
						klein, ist Wind in unseren Segeln!
					</p>
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
