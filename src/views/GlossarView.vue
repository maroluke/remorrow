<script setup>
import ArrowIcon from '@components/icons/IconArrow.vue';
</script>

<template>
	<main class="bg-white">
		<section class="px-5 pt-24 pb-10 bg-no-repeat bg-cover text-coal">
			<h1 class="pb-5">Glossar</h1>

			<ul class="flex flex-col gap-5">
				<li class="font-medium flex justify-between text-coal border-b pb-5">
					Nachhaltig
					<ArrowIcon :class="`self-center w-3 fill-current`"
					/>
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
			</ul>
		</section>
	</main>
</template>

<style scoped>
.logo {
	@apply !fill-gray-900;
}
</style>
