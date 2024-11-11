<script setup>
import { ref } from "vue";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import VideoModal from "@components/VideoModal.vue";
import CarouselSupporter from "@/components/CarouselSupporter.vue";

import Cite from "@components/Cite.vue";
import Ting from "@/components/icons/logo-ting.vue";
import WeMakeIt from "@/components/icons/logo-wemakeit.vue";
import Tadah from "@/components/icons/logo-tadah.vue";
import Circunis from "@/components/icons/logo-circunis.vue";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselItem,
	CarouselPrevious,
	CarouselPagination,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const pluginAutoplay = Autoplay({
	delay: 4000,
	stopOnMouseEnter: true,
	stopOnInteraction: false,
});

const pluginFade = Fade();

const modalOpen = ref(false);
const videoUrl = ref("");

function openModal(url) {
	videoUrl.value = url;
	modalOpen.value = true;
}

function closeModal() {
	modalOpen.value = false;
	videoUrl.value = "";
}
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="'marissa-rodriguez-p7iBrf9I9iE-unsplash.jpg'">
			<template #title>match:make</template>

			<template #paragraph>
				Die match:make ist ein exklusives Event-Format von re:morrow an
				dem nachhaltige Startups und etablierte Unternehmen
				zusammengeführt werden.
				<br /><br />
				Das Ziel ist die gegenseitige Unterstützung für einen
				gemeinsamen Beitrag zu einem besseren Morgen. Damit geht auch
				Inspiration und Hoffnung einher, die für nachhaltige und
				positive Veränderung unerlässlich ist.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 bg-snow text-dark md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-xs"
			>
				<template #title>Stimmen der Teilnehmenden</template>
			</TitleParagraphItem>

			<div class="w-full max-w-screen-xs mx-auto">
				<Carousel
					:opts="{
						active: false,
						loop: true,
						duration: 10,
						breakpoints: {
							'(min-width: 475px)': { active: true },
						},
					}"
					:plugins="[pluginAutoplay, pluginFade]"
					@mouseenter="pluginAutoplay.stop"
					@mouseleave="pluginAutoplay.play"
				>
					<CarouselContent
						class="-ml-0 flex flex-col gap-10 xs:gap-0 xs:flex-none xs:flex-row"
					>
						<Cite
							profileImageUrl="/male-1.jpg"
							profileName="Silvan Groher"
							companyName="Ting"
							companyUrl="https://www.ting.community/"
							@open-video-modal="openModal('/dummy-video-1.mp4')"
						>
							<template v-slot:quote>
								"Im Minutentakt sind weltverändernde Ideen
								präsentiert worden"
							</template>

							<template v-slot:company-logo>
								<Ting class="w-12 h-auto" />
							</template>
						</Cite>

						<Cite
							profileImageUrl="/female-1.jpg"
							profileName="Graziella Luggen"
							companyName="wemakeit"
							companyUrl="https://www.wemakeit.ch/"
							@open-video-modal="openModal('/dummy-video-2.mp4')"
						>
							<template v-slot:quote>
								"Was anders ist im Vergleich zu anderen
								Anlässen: es ist sehr vielfaltet und vielseitig.
								Es kommen Leute aus ganz unterschiedlichen
								Branchen zusammen, die alle das gleiche Ziel
								haben. Und trotzdem ist es nicht ein hallendes
								Echo in der Bubble."
							</template>

							<template v-slot:company-logo>
								<WeMakeIt class="w-12 h-auto" />
							</template>
						</Cite>

						<Cite
							profileImageUrl="/female-2.jpg"
							profileName="Klara Zürcher"
							companyName="Tadah"
							companyUrl="https://www.tadah.ch/"
							@open-video-modal="openModal('/dummy-video-3.mp4')"
						>
							<template v-slot:quote>
								"Networking-Events können recht anstrengend
								sein, zum Teil auch etwas gestellt, sodass man
								sich eigentlich gerne wegschleichen würde. Das
								war hier ganz anders!"
							</template>

							<template v-slot:company-logo>
								<Tadah class="w-16 h-auto" />
							</template>
						</Cite>

						<Cite
							profileImageUrl="/female-3.jpg"
							profileName="Karin Friedli"
							companyName="Circunis"
							companyUrl="https://www.circunis.ch/"
							@open-video-modal="openModal('/dummy-video-4.mp4')"
						>
							<template v-slot:quote>
								"Ich habe heute Abend interessante Menschen
								kennengelernt und spannende Kontakte, die
								wirklich die Türen für weiteren Austausch und
								vielleicht auch Zusammenarbeit öffnen. Das ist
								super toll!"
							</template>

							<template v-slot:company-logo>
								<Circunis class="w-20 h-auto" />
							</template>
						</Cite>
					</CarouselContent>

					<CarouselPrevious
						class="-left-20 text-black bg-opacity-20 border-opacity-10 hidden xs:flex"
					/>
					<CarouselNext
						class="-right-20 text-black bg-opacity-20 border-opacity-10 hidden xs:flex"
					/>

					<CarouselPagination class="hidden xs:flex" />
				</Carousel>
			</div>
		</section>

		<section class="text-snow px-5 py-10 md:bg-snow md:text-dark md:py-20">
			<TitleParagraphItem
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-start mx-auto max-w-screen-md"
			>
				<template #title>Unsere Unterstützer im 2024</template>
			</TitleParagraphItem>

			<div class="w-full max-w-screen-md mx-auto mt-10">
				<CarouselSupporter />
			</div>
		</section>

		<VideoModal v-if="modalOpen" :url="videoUrl" @close="closeModal" />
	</main>
</template>
