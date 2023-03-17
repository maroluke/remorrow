<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import ContactModal from "@components/ContactModal.vue";
</script>

<template>
	<main class="bg-dark">
		<JumboHeader
			:classes="'bg-bottom'"
			:src="'lawrence-aritao-k2sTHzAnmfY-unsplash.jpg'"
		>
			<template #title>Wir bauen eine Community </template>

			<template #paragraph>
				Noch stehen wir am Anfang und müssen das fortomorrow-Verständnis
				einer funktionierenden Community erst noch entwickeln.
			</template>
		</JumboHeader>

		<div class="sm:bg-snow md:bg-dark md:flex md:justify-center">
			<div class="max-w-screen-lg sm:flex sm:p-10 sm:items-center sm:gap-10 md:items-center md:justify-center xl:p-0">
				<section class="px-5 py-10 bg-snow grow md:py-20 md:flex md:justify-center text-dark sm:p-0 md:flex-initial md:bg-dark md:text-snow">
					<TitleParagraphItem>
						<template #paragraph>
							<p>Da wir alles Individuen sind, mit eigenen Vorstellungen,
							Ideen und Fähigkeiten, werden wir geeignete Kanäle für
							Austausch etablieren.</p>
							<p>Wie wäre es denn mit einem regelmässigen, virtuellen
							Roundtable? Darin sind wir in der Lage, spannende und
							inspirierende Themen zu teilen, einander kennenzulernen,
							Anknüpfungspunkte zu finden und uns über inhaltliche Themen
							auszutauschen.</p>
							<p>Ein solches Format ist bis zu einem gewissen Punkt
							wachstumsfähig. Es ist auch denkbar, physische Treffen
							einzuflechten, wenn sich die Möglichkeiten dazu ergeben.</p>
						</template>
					</TitleParagraphItem>
				</section>

				<div class="bg-snow to-dark relative overflow-hidden xs:flex xs:justify-center sm:justify-end md:bg-transparent sm:min-w-[300px]">
					<div
						class="w-full h-[50%] absolute top-0 left-0 bg-gradient-to-b from-snow to-transparent z-10 xs:z-0 xs:special-gradient xs:h-full sm:bg-none md:hidden"
					></div>
					<img
						loading="lazy"
						class="object-contain -mt-32 w-full sm:object-cover xs:max-w-sm xs:rounded-lg xs:m-0"
						src="@assets/media/alexander-milo-HwxVLhLyg2s-unsplash.jpg"
						alt="Unser Weg"
					/>
				</div>
			</div>
		</div>

		<section class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-dark md:flex md:justify-center md:p-20">
			<TitleParagraphItem class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start">
				<template #title>
					Fakt ist
				</template>
				<template #paragraph>
					<p>Es ist eine Reise und wir werden an den
					Erfahrungen wachsen.
					<br /><br />
					Hast du Lust, uns auf dieser Reise zu begleiten,
					mitzugestalten und glaubst ebenso an unsere
					<a href="/unser-weg" class="glossar-link">Grundsätze</a>?</p>
				</template>
			</TitleParagraphItem>
		</section>

		<!-- <section class="px-5 py-10 md:p-20 bg-[url('/sarah-lee-QURU8IY-RaI-unsplash.jpg')] bg-center bg-cover bg-no-repeat flex justify-center"> -->
			<section class="px-5 py-10 md:p-20 bg-gradient-to-tr from-rich-electric-blue to-dark-sky-blue flex justify-center">
			<!-- <div class="w-full h-full absolute top-0 left-0 z-0 bg-dark bg-opacity-5"></div> -->
			<TitleParagraphItem :button="'Melde dich'" :icon="'mail'" :classes="'bg-snow !w-full modal-toggle'" class="modal-toggle gap-10 !mb-0 !items-start justify-center drop-shadow-md max-w-screen-md w-full">
				<template #title>
					Werde Teil dieser wachsenden Community.
				</template>
			</TitleParagraphItem>
		</section>
	</main>
	
	<ContactModal />
</template>
