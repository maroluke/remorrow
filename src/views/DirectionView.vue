<script setup>
import TitleParagraphItem from "@components/TitleParagraphItem.vue";
import JumboHeader from "@components/JumboHeader.vue";
import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
    <main class="bg-dark">
        <JumboHeader :src="'mykhailo-kopyt-lS2rJhjhC1o-unsplash.jpg'">
            <template #title>
                Unser Weg
            </template>

            <template #paragraph>
                Wir stehen noch am Anfang, haben viele Ideen, sind motiviert und zu 100% davon überzeugt, dass wir als
                Gemeinschaft und Kollektiv mehr erreichen können. Um unsere Vision umzusetzen, haben wir eine Roadmap
                mit 4 Phasen entwickelt.
            </template>
        </JumboHeader>

        <section class="py-10 bg-snow">
            <TitleParagraphItem class="text-dark pb-10 px-5">
                <template #title>
                    Die Roadmap
                </template>

                <template #paragraph>
                    In erster Linie möchten wir organisch wachsen. Wir möchten begeisterte Menschen finden, die Teil
                    dieser Vision sein wollen und Partnerschaften schliessen, mit denen wir uns gemeinsam entwickeln und
                    für künftiges Wachstum wurzeln können.
                    <br /><br />
                    Fortomorrow entwickeln wir durch die nachfolgenden Etappen:
                </template>
            </TitleParagraphItem>

            <div class="grid grid-cols-1 gap-2 px-2">
                <TitleParagraphItem :heading="3" :icon="'checked'" :iconStyle="'fill-coal'"
                    class="text-coal p-3 py-5">
                    <template #title>
                        Phase 1 - Storming & Norming (2022)
                    </template>

                    <template #paragraph>
                        <ul class="list">
                            <li>Entwicklung der Repräsentation (Branding) und Kommunikation</li>
                            <li>Aufbau des 42-Fundaments (entwickeln eigener Konzepte)</li>
                            <li>Schärfung Value Proposition und Strategie</li>
                        </ul>
                    </template>
                </TitleParagraphItem>

                <TitleParagraphItem :heading="3" :icon="'running'" :iconStyle="'fill-coal'"
                    class="text-coal p-3 py-5">
                    <template #title>
                        Phase 2 - Seeding (2023)
                    </template>

                    <template #paragraph>
                        <ul class="list">
                            <li>Weiterentwicklung von 42-Konzepten</li>
                            <li>Projekte finden und Kollaboration aufbauen</li>
                            <li>Start / Verstärkung des Community-Building</li>
                            <li>Konzeption Plattform</li>
                        </ul>
                    </template>
                </TitleParagraphItem>

                <TitleParagraphItem :heading="3" :icon="'planed'" :iconStyle="'fill-coal'"
                    class="text-coal p-3">
                    <template #title>
                        Phase 3 - Planting (23/2024)
                    </template>

                    <template #paragraph>
                        <ul class="list">
                            <li>Reporting 2023 & Re-Evaluation Strategie</li>
                            <li>Onboarding weiterer Projekte</li>
                            <li>Fokus auf Plattform</li>
                            <li>Definition & Angebot erster Services</li>
                            <li>Etablierung erster Partnerschaften</li>
                        </ul>
                    </template>
                </TitleParagraphItem>

                <TitleParagraphItem :heading="3" :icon="'world'" :iconStyle="'fill-coal'"
                    class="text-coal p-3">
                    <template #title>
                        Phase 4 - Growing (2025)
                    </template>

                    <template #paragraph>
                        <ul class="list">
                            <li>Reporting 2024 & Re-Evaluation Strategie</li>
                            <li>Weitere Projekte, Mitglieder und Partner gewinnen</li>
                            <li>Plattform-Erweiterung: Ideen.</li>
                        </ul>
                    </template>
                </TitleParagraphItem>
            </div>
        </section>

        <section class="bg-dark text-snow py-10">
            <TitleParagraphItem class="px-5">
                <template #title>
                    Purpose
                </template>

                <template #paragraph>
                    <strong>Zusammen leisten wir einen Beitrag</strong> für eine hoffnungsvolle und begeisternde
                    Zukunft, in der wir Menschen im Einklang mit unserem Planeten und Mitmenschen leben können.
                </template>
            </TitleParagraphItem>

            <div class="px-2 my-5">
                <img class="object-contain rounded-lg" src="@assets/media/the-loop-approach.jpg" alt="Purpose" />
                <p class="text-moon text-sm mt-1 px-3">Quelle: The Loop Approach (Buch, TheDive)</p>
            </div>

            <TitleParagraphItem class="px-5">
                <template #paragraph>
                    <strong>Wir setzen uns für Ideen & Projekte ein</strong>, die einen nachweisbaren und positiven
                    Impact realisieren und diesen in ihren Werten sowie Geschäftsmodell verankert haben. Für diese
                    Unterfangen, die unseren Werten entsprechen und überzeugen, schaffen wir einen fruchtbaren
                    Nährboden.
                </template>
            </TitleParagraphItem>
        </section>

        <section class="bg-snow text-coal py-10">
            <TitleParagraphItem class="px-5">
                <template #title>
                    Vision
                </template>

                <template #paragraph>
                    <strong>Ein besseres Morgen für Mensch und Planet</strong>, in dem Hoffnung, Inspiration und
                    Begeisterung gegenwärtig ist und Mut für Veränderung macht.
                    <br /><br />
                    Konkret will sich fortomorrow als relevante, globale Plattform etablieren um die richtigen Menschen
                    & nachhaltige Projekte zusammenzubringen. So schaffen wir eine Basis für kollaboratives Wirken, die
                    Lösung von Problemen und positivem Impact.
                </template>
            </TitleParagraphItem>

            <TitleParagraphItem class="px-5 pt-10">
                <template #title>
                    Ziele
                </template>

                <template #paragraph>
                    Natürlich setzen wir uns auch konkrete Ziele, um unsere Vision in die Realität zu überführen.
                    Trotzdem, nicht vergessen:
                    <br />
                    «Plans are nothing – planning is everything».

                    <div class="mt-5">
                        <ul class="list">
                            <li>Reporting 2024 & Re-Evaluation Strategie
                            </li>
                            <li>Weitere Projekte, Mitglieder und Partner
                                gewinnen</li>
                            <li>Plattform-Erweiterung: Ideen.</li>
                        </ul>
                    </div>
                </template>
            </TitleParagraphItem>
        </section>
    </main>
</template>
