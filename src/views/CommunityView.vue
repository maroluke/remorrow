<script>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";

export default {
	name: "CommunityView",
	components: {
		TitleParagraphItem,
		JumboHeader,
	},
};
</script>

<template>
	<main class="bg-dark">
		<JumboHeader
			:classes="'bg-bottom'"
			:src="'lawrence-aritao-k2sTHzAnmfY-unsplash.jpg'"
		>
			<template #title>Wir bauen eine Community </template>

			<template #paragraph>
				Noch stehen wir am Anfang und müssen das re:morrow-Verständnis
				einer funktionierenden Community erst noch entwickeln.
			</template>
		</JumboHeader>

		<div class="sm:bg-snow md:bg-dark md:flex md:justify-center">
			<div
				class="max-w-screen-lg sm:flex sm:p-10 sm:items-center sm:gap-10 md:gap-20 xl:gap-32 md:items-center md:justify-center xl:p-0"
			>
				<section
					class="px-5 py-10 bg-snow grow md:py-20 md:flex md:justify-center text-dark sm:p-0 md:flex-initial md:bg-dark md:text-snow"
				>
					<TitleParagraphItem>
						<template #paragraph>
							<p>
								Als Individuen haben wir alle eigene Vorstellungen, Ideen und Fähigkeiten.
							</p>
							<p>
								Die geeigneten Kanäle und Gefässe für den Austausch & die Kollaboration entwickeln wir daher organisch und gemeinsam mit den Menschen, die mitgestalten wollen. 
							</p>
							<p>
								Unsere Community unterteilt sich derweil in 2 Bereiche: <strong>Pioneers</strong> und <strong>Heroes</strong>.
							</p>
						</template>
					</TitleParagraphItem>
				</section>

				<div
					class="bg-snow to-dark relative overflow-hidden py-20 xs:flex xs:justify-center sm:justify-end md:bg-transparent sm:min-w-[300px]"
				>
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

		<section
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-dark md:flex md:justify-center md:p-20"
		>
			<TitleParagraphItem
				class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start"
			>
				<template #title>Pioneers</template>
				<template #paragraph>
					<p>
						Menschen, die an unsere Grundsätze glauben und re:morrow aktiv weiterentwickeln wollen. <br /><br />
						Sie bilden das Kernteam, in dem wir Antworten auf unsere eigenen Wachstumsfragen suchen, das Wirken ausbauen und die Idee von re:morrow Schritt um Schritt weiter entfalten.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 sm:bg-snow md:bg-dark md:flex md:justify-center md:p-20"
		>
			<TitleParagraphItem
				class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start"
			>
				<template #title>Heroes</template>
				<template #paragraph>
					<p>
						Es gibt viele Möglichkeiten um Projekte & Startups zu unterstützen. Nebst unseren eigenen Netzwerken, der Reichweite von re:morrow selbst oder Partnern greifen wir auch auf einen Pool von Menschen zurück, die ihre Fähigkeiten & ihr Wissen für solche Momente bereitstellen. <br /><br />
						Menschen, die offen dafür sind, zu helfen, wenn sie es können. Das sind unsere Heroes. 
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<section
			class="px-5 py-10 bg-dark text-snow md:bg-snow md:text-dark md:flex md:justify-center md:p-20"
		>
			<TitleParagraphItem
				class="max-w-screen-md w-full flex flex-col gap-10 !mb-0 !items-start"
			>
				<template #title>Fakt ist</template>
				<template #paragraph>
					<p>
						Wir befinden uns auf einer Reise und an den Erfahrungen werden wir wachsen.
						Willst du uns begleiten und den Weg gemeinsam gestalten? <br /><br />
						Du willst dich engagieren, um etwas Positives zu bewirken, weisst aber nicht wie genau – dann bist du bei uns richtig.
					</p>
				</template>
			</TitleParagraphItem>
		</section>

		<!-- <section class="px-5 py-10 md:p-20 bg-[url('/sarah-lee-QURU8IY-RaI-unsplash.jpg')] bg-center bg-cover bg-no-repeat flex justify-center"> -->
		<section
			class="px-5 py-10 md:p-20 bg-gradient-to-tr from-rich-electric-blue to-dark-sky-blue flex justify-center"
		>
			<!-- <div class="w-full h-full absolute top-0 left-0 z-0 bg-dark bg-opacity-5"></div> -->
			<TitleParagraphItem
				:button="'Melde dich'"
				:contact="true"
				:icon="'mail'"
				:classes="'bg-snow !w-full modal-toggle'"
				class="gap-10 !mb-0 !items-start justify-center drop-shadow-md max-w-screen-md w-full"
			>
				<template #title>
					Werde Teil dieser wachsenden Community.
				</template>
			</TitleParagraphItem>
		</section>
	</main>
</template>
