<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
import ContactModal from "@components/ContactModal.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'lawrence-kayku-frWOcVisp8U-unsplash.jpg'">
			<template #title> Sei ein Teil davon </template>

			<template #paragraph>
				Wir sind der Meinung, dass wir miteinander nicht nur mehr bewirken, sondern auch aneinander wachsen können. Auf unserer
				Reise mit fortomorrow freuen wir uns auf alle, die mit uns einen nachhaltig positiven Beitrag für eine hoffnungsvolle
				Zukunft leisten wollen.
			</template>
		</JumboHeader>

		<section class="px-5 py-10 bg-snow">
			<TitleParagraphItem class="text-dark">
				<template #title>
					Projekt, Unternehmen oder Initiative.
				</template>

				<template #paragraph>
					Du bist für ein laufendes Projekt verantwortlich, glaubst an das Potenzial und bist offen für partnerschaftliche
					Kollaboration? Dann lass uns die Köpfe zusammenstecken, so richtig auf die Tube drücken und das nächste Level erreichen!
					<br /><br />
					Sind Idee und Konzept überzeugend, finden wir gemeinsam heraus, was du brauchst und welche idealen Bedingungen für
					gesundes Wachstum beitragen.
				</template>
			</TitleParagraphItem>

			<SquircleButton
				:icon="'mail'"
				:classes="'bg-coal'"
				class="mt-5 modal-toggle"
				type="button"
			>
				<template #buttonRef><slot>Melde dich</slot></template>
			</SquircleButton>
		</section>

		<section class="text-snow px-5 py-10">
			<TitleParagraphItem>
				<template #title> Allem ein Anfang. </template>

				<template #paragraph>
					Du hast eine Idee, die du umsetzen willst, weisst jedoch nicht weiter? Du hast schon ein laufendes Projekt, aber es
					klemmt und du brauchst einen Blick von aussen? Vielleicht bist du mit deinen Gedanken auch noch in einem frühen Stadium
					und möchtest dich einmal gezielt dazu austauschen?
					<br /><br />
					Lass uns gemeinsam den ersten Schritt gehen und herausfinden, wie wir dich auf deinem Weg unterstützen können.
				</template>
			</TitleParagraphItem>

			<SquircleButton
				:icon="'mail'"
				:classes="'bg-coal'"
				class="mt-5 modal-toggle"
				type="button"
			>
				<template #buttonRef><slot>Let's talk</slot></template>
			</SquircleButton>
		</section>

		<section class="text-dark px-5 py-10 bg-snow">
			<TitleParagraphItem>
				<template #title>Wirke mit uns zusammen. </template>

				<template #paragraph>
					Du bist offen für Neues, willst deinen eigenen positiven Impact vergrössern, Teil von etwas Grösserem sein,
					Gleichgesinnte kennenlernen und einen neuen Weg ausprobieren?
					<br /><br />
					Wir freuen uns dich kennenzulernen und gemeinsam mit dir zu entdecken, wo du dich in der fortomorrow-Community am besten
					entfalten kannst.
				</template>
			</TitleParagraphItem>

			<SquircleButton
				:icon="'mail'"
				:classes="'bg-coal'"
				class="mt-5 modal-toggle"
			>
				<template #buttonRef>Melde dich</template>
			</SquircleButton>
		</section>
	</main>

	<ContactModal />
	<!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
	<!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
