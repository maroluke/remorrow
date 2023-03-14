<template>
	<section>
		<TitleParagraphItem class="max-w-screen-sm mx-auto">
			<template #title>Was wir tun.</template>
			<template #paragraph>
				Mit <span class="font-bold">fortomorrow</span> wirken wir in den
				folgenden Bereichen.
			</template>
		</TitleParagraphItem>

		<div class="flex flex-col gap-10 items-stretch mt-10 max-w-screen-sm mx-auto 2xs:flex-row 2xs:gap-4 sm:gap-10 md:gap-12">
			<div class="flex-1 flex flex-col">
				<CommunityIcon class="w-10 h-10 fill-dark" />
				<h3 class="leading-loose">Community</h3>
				<p class="text-sm mt-2 flex-grow m-0 md:text-xl">
					Aufbau einer Com&shy;munity mit mo&shy;ti&shy;vier&shy;ten
					Men&shy;schen, die ver&shy;ändern und helfen wol&shy;len.
				</p>
				<SquircleButton
					:classes="'bg-coal px-3 !h-10 w-min'"
                    :to="'/community'"
					:sizeIcon="'w-2'"
					class="mt-5 text-sm"
				>
                    <template #buttonRef>Mehr erfahren</template>
				</SquircleButton>
			</div>

			<div class="flex-1 flex flex-col">
				<ProjectIcon class="w-10 h-10 fill-dark" />
				<h3 class="leading-loose">Projekte</h3>
				<p class="text-sm mt-2 flex-grow m-0 md:text-xl">
					Aktive Unterstützung und Förderung von nach&shy;haltigen &
					rege&shy;ne&shy;ra&shy;tiven Ideen und Projekten.
				</p>
				<SquircleButton
					:classes="'bg-coal px-3 !h-10 w-min'"
                    :to="'/projekte'"
					:sizeIcon="'w-2'"
					class="mt-5 text-sm"
				>
					<template #buttonRef>Mehr erfahren</template>
				</SquircleButton>
			</div>
		</div>
	</section>
</template>

<script setup>
import TitleParagraphItem from "./TitleParagraphItem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import ProjectIcon from "./icons/IconProject.vue";
import SquircleButton from "./SquircleButton.vue";
</script>
