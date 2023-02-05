<script setup>
    import TitleParagraphItem from "@components/TitleParagraphItem.vue";
    import JumboHeader from "@components/JumboHeader.vue";
    import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
    <main class="bg-dark">
        <JumboHeader
            :src="'markus-spiske-sFydXGrt5OA-unsplash.jpg'"
        >
            <template #title>
                Wer wir sind
            </template>

            <template #paragraph>
                Hinter fortomorrow stehen Menschen, die sich aktiv für ein besseres Morgen einsetzen möchten und mit Begeisterung und Motivation einen Schritt weiter gehen wollen. 
            </template>
        </JumboHeader>

        <section class="px-5 py-10 bg-snow">
            <TitleParagraphItem class="text-dark">
                <template #title>
                    Wir tun dies auf unsere Weise ...
                </template>

                <template #paragraph>
                    ... und versuchen einen eigenen Weg zu finden. Nebst dem, dass wir uns als Kollektiv verstehen und eine <strong>Community rundum nachhaltige Ideen & Projekte</strong> aufbauen wollen, gibt es natürlich immer treibende Kräfte. Bei uns sind das Marko und Sirik
                    <br /><br />
                    Du willst uns kennenlernen? Für einen Schwatz sind wir immer zu haben!
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'mail'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Kontakt
            </SquircleButton>
        </section>
        
        <section class="text-snow px-5 py-10">
            <TitleParagraphItem>
                <template #title>
                    Der Garten.
                </template>

                <template #paragraph>
                    Die Analogie des Gartens mögen wir gern. Ein Garten voller Pflanzen in all ihren Wachstumsstadien. Ein Garten der darum bemüht ist, den idealen Boden für gesundes Wachstum von neuen, nachhaltigen und <a href="#" class="glossar-link">zukunftsorientierten</a> Projekten herzustellen.
                    <br /><br />
                    Egal ob diese gerade erst keimen oder bereits kleine Pflänzchen sind, wir versuchen die individuellen Voraussetzungen zu schaffen, die es braucht, damit starke Pflanzen wurzeln können. 
                </template>
            </TitleParagraphItem>
        </section>

        <section class="text-dark px-5 py-10 bg-snow">
            <TitleParagraphItem>
                <template #title>
                    Die Projekte.
                </template>

                <template #paragraph>
                    Alle Projekte bei fortomorrow haben einen klaren, nachhaltigen Bezug - das ist uns besonders wichtig. Sie sind klimaneutral, klimapositiv, regenerativ oder auf direktem Wege dahin. Wir stellen diesen Bezug sicher und unterstützen die Projekte aktiv auf diesem Weg.
                    <br /><br />
                    So streben wir gemeinsam ein besseres Morgen an. Für uns zählt jede Pflanze, die eine positive Wirkung auf unsere Zukunft hat.
                </template>
            </TitleParagraphItem>
        </section>

        <section class="text-snow px-5 py-10">
            <TitleParagraphItem>
                <template #title>
                    Entdecke unseren Purpose, Ziele und Vision
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :classes="'bg-coal'"
                class="mt-5"
            >
                Mehr erfahren
            </SquircleButton>
        </section>

        <section class="bg-snow text-dark px-5 py-10">
            <TitleParagraphItem>
                <template #title>
                    Hier findest du mehr darüber, wie wir unsere fortomorrow-Projekte unterstützen und die Community aufbauen.
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'project'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Wir fördern Projekte
            </SquircleButton>

            <SquircleButton
                :icon="'community'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Wir bauen eine Community
            </SquircleButton>
        </section>
    </main>
    <!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
    <!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
