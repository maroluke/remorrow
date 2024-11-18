<script setup>
import { ref } from "vue";
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import VideoModal from "@components/VideoModal.vue";
import CarouselSupporter from "@/components/CarouselSupporter.vue";

import Cite from "@components/Cite.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

const jumboImage = "2G9A8323.webp";

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

const quoteList = [
	{
		profileImageUrl: "/quote-profiles/silvan-groher.jpg",
		profileName: "Silvan Groher",
		companyName: "Ting",
		companyUrl: "https://www.ting.community/",
		videoUrl: "/videos/interview_6_v2 (1080p).mp4",
		quote: "Im Minutentakt sind weltverändernde Ideen präsentiert worden.",
	},
	{
		profileImageUrl: "/quote-profiles/graziella-luggen.jpg",
		profileName: "Graziella Luggen",
		companyName: "wemakeit",
		companyUrl: "https://www.wemakeit.ch/",
		videoUrl: "/videos/interview_2_v2 (1080p).mp4",
		quote: "Was anders ist im Vergleich zu anderen Anlässen: es ist sehr vielfältig und vielseitig. Es kommen Leute aus ganz unterschiedlichen Branchen zusammen, die alle das gleiche Ziel haben. Und trotzdem ist es nicht ein hallendes Echo in der Bubble.",
	},
	{
		profileImageUrl: "/quote-profiles/klara-zuercher.jpg",
		profileName: "Klara Zürcher",
		companyName: "Tadah",
		companyUrl: "https://www.tadah.ch/",
		videoUrl: "/videos/interview_3_v2 (1080p).mp4",
		quote: "Networking-Events können recht anstrengend sein, zum Teil auch etwas gestellt, sodass man sich eigentlich gerne wegschleichen würde. Das war hier ganz anders!",
	},
	{
		profileImageUrl: "/quote-profiles/karin-friedli.jpg",
		profileName: "Karin Friedli",
		companyName: "Circunis",
		companyUrl: "https://www.circunis.ch/",
		videoUrl: "/videos/interview_1_v2 (1080p).mp4",
		quote: "Ich habe heute Abend interessante Menschen kennengelernt und spannende Kontakte geknüpft, die wirklich die Türen für weiteren Austausch und vielleicht auch Zusammenarbeit öffnen. Das ist super toll!",
	},
];
</script>

<template>
	<main class="bg-dark">
		<JumboHeader :src="jumboImage">
			<template #title>match:make</template>

			<template #paragraph>
				Die match:make ist ein exklusives Event-Format von re:morrow und
				führt nachhaltige Startups und etablierte Unternehmen zusammen.
				<br /><br />
				Das Ziel ist die gegenseitige Unterstützung für einen
				gemeinsamen Beitrag zu einem besseren Morgen.
			</template>
		</JumboHeader>

		<section
			class="px-5 py-10 text-dark bg-snow md:bg-dark md:text-snow md:py-20"
		>
			<TitleParagraphItem
				:classes="'bg-coal w-full modal-toggle'"
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-center mx-auto max-w-screen-md"
			>
				<template #title>Feedbacks</template>
			</TitleParagraphItem>

			<div class="w-full max-w-screen-md mx-auto mt-20">
				<div class="flex flex-col gap-20">
					<Cite
						v-for="(component, index) in quoteList"
						:key="index"
						:profileImageUrl="component.profileImageUrl"
						:profileName="component.profileName"
						:companyName="component.companyName"
						:companyUrl="component.companyUrl"
						:reverseOrder="index % 2 === 1"
						@open-video-modal="openModal(component.videoUrl)"
					>
						<template v-slot:quote>
							{{ component.quote }}
						</template>
					</Cite>
				</div>
			</div>
		</section>

		<section class="text-snow bg-dark md:bg-snow md:text-dark md:py-20">
			<div
				class="w-full max-w-screen-md mx-auto overflow-hidden sm:rounded-md"
			>
				<div class="relative w-full pb-[56.25%] h-0 overflow-hidden">
					<video
						class="absolute top-0 left-0 w-full h-full object-cover"
						controls
						src="/videos/matchmake_v3 (1080p).mp4"
						poster="/src/assets/media/mm2024/2G9A8926.webp"
					></video>
				</div>
			</div>
		</section>

		<section
			class="bg-dark text-snow md:bg-snow md:text-dark px-5 py-10 md:py-20"
		>
			<TitleParagraphItem
				class="rounded-sm flex flex-col gap-10 !mb-0 !items-center mx-auto max-w-screen-md text-center"
			>
				<template #title>Unsere Unterstützer im 2024</template>
			</TitleParagraphItem>

			<div class="w-full max-w-screen-md mx-auto mt-10">
				<CarouselSupporter />
			</div>
		</section>

		<section class="text-snow bg-dark">
			<ImageCarousel />
		</section>

		<VideoModal v-if="modalOpen" :url="videoUrl" @close="closeModal" />
	</main>
</template>
