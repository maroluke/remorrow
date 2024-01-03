<script setup>
import SquircleButton from "./SquircleButton.vue";
</script>

<template>
	<section class="z-50">
		<div
			class="text-xs rounded-lg px-5 py-10 bg-white text-coal drop-shadow-xl w-full max-w-screen-sm mx-auto opacity-90 md:w-96"
		>
			<p class="italic text-base">
				“Alle Menschen, die ich kenne, wünschen sich Liebe, Frieden, die Überwindung von Armut und eine schöne und sichere Umwelt.
				Warum also machen wir das nicht einfach?
				Was hält uns als Gesellschaft davon ab?”
			</p>

			<div class="flex gap-5">
				<div class="flex-shrink w-2/3">
					<p class="text-base font-medium">– Maja Göpel</p>
					<p class="text-sm font-light">
						Politökonomin, Transformationsforscherin,
						Nachhaltigkeitsexpertin und
						Gesellschaftswissenschaftlerin mit Schwerpunkt auf
						transdisziplinärem Denken
					</p>
				</div>

				<div class="w-1/3 flex flex-col justify-between items-center">
					<div
						class="rounded-full overflow-hidden max-w-[100px] lg:max-w-[140px]"
					>
						<img
							loading="lazy"
							class="object-cover rounded-full"
							src="../assets/media/profile-maja-goepel.jpg"
							alt="Maja Göpel"
						/>
					</div>

					<!-- <ul class="flex gap-3 justify-center w-full">
						<li class="flex justify-center">
							<SquircleButton
								:icon="'instagram'"
								:classes="'bg-moon !h-auto !p-2'"
								:to="'https://www.instagram.com/majagoepel/'"
								class="mt-5"
							>
							</SquircleButton>
						</li>
						<li class="flex justify-center">
							<SquircleButton
								:icon="'linkedin'"
								:classes="'bg-moon !h-auto !p-2'"
								:to="'https://www.linkedin.com/in/majagoepel/'"
								class="mt-5"
							>
							</SquircleButton>
						</li>
					</ul> -->
				</div>
			</div>
		</div>
	</section>
</template>
