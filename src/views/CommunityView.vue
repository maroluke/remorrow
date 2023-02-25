<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader
			:class="'bg-bottom'"
			:src="'lawrence-aritao-k2sTHzAnmfY-unsplash.jpg'"
		>
			<template #title>Wir bauen eine Community </template>

			<template #paragraph>
				Noch stehen wir am Anfang und müssen das fortomorrow-Verständnis
				einer funktionierenden Community erst noch entwickeln.
			</template>
		</JumboHeader>

		<section class="px-5 py-10 bg-snow">
			<TitleParagraphItem class="text-dark">
				<template #paragraph>
					Da wir alles Individuen sind, mit eigenen Vorstellungen,
					Ideen und Fähigkeiten, werden wir geeignete Kanäle für
					Austausch etablieren.
					<br /><br />
					Wie wäre es denn mit einem regelmässigen, virtuellen
					Roundtable? Darin sind wir in der Lage, spannende und
					inspirierende Themen zu teilen, einander kennenzulernen,
					Anknüpfungspunkte zu finden und uns über inhaltliche Themen
					auszutauschen.
					<br /><br />
					Ein solches Format ist bis zu einem gewissen Punkt
					wachstumsfähig. Es ist auch denkbar, physische Treffen
					einzuflechten, wenn sich die Möglichkeiten dazu ergeben.
				</template>
			</TitleParagraphItem>
		</section>

		<div class="relative overflow-hidden">
			<div
				class="w-full h-[50%] absolute top-0 left-0 bg-gradient-to-b from-snow to-transparent z-10"
			></div>
			<img
				loading="lazy"
				class="object-contain -mt-32"
				src="@assets/media/alexander-milo-HwxVLhLyg2s-unsplash.jpg"
				alt="Unser Weg"
			/>
		</div>

		<section class="px-5 py-10 bg-dark text-snow">
			<TitleParagraphItem>
				<template #paragraph>
					Fakt ist: Es ist eine Reise und wir werden an den
					Erfahrungen wachsen.
					<br /><br />
					Hast du Lust, uns auf dieser Reise zu begleiten,
					mitzugestalten und glaubst ebenso ebenso an unsere
					<a href="/unser-weg" class="glossar-link">Grundsätze</a>?
				</template>
			</TitleParagraphItem>
		</section>

		<section class="px-5 py-10 bg-rich-electric-blue">
			<TitleParagraphItem class="text-snow">
				<template #title>
					Werde Teil dieser wachsenden Community.
				</template>
			</TitleParagraphItem>

			<SquircleButton :icon="'mail'" :classes="'bg-snow'" class="mt-5">
				<template #buttonRef>Melde dich bei uns</template>
			</SquircleButton>

			<ContactModal class="text-rich-electric-blue">Melde dich</ContactModal>
		</section>
	</main>
</template>
