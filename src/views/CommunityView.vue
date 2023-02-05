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
            <template #title>
                Wir bauen eine Community
            </template>

            <template #paragraph>
                Noch stehen wir am Anfang und müssen das fortomorrow-Verständnis einer funktionierenden Community erst noch entwickeln.
            </template>
        </JumboHeader>

        <section class="px-5 py-10 bg-snow">
            <TitleParagraphItem class="text-dark">
                <template #paragraph>
                    Da wir alles Individuen sind, mit eigenen Vorstellungen, Ideen und Fähigkeiten, stellen wir uns primär vor, eine Plattform für Austausch zu etablieren. 
                    <br /><br />
                    Zu Beginn kann dies z.B. mit einem regelmässigen, virtuellen Roundtable durchgeführt werden. Darin sind wir in der Lage spannende und inspirierende Themen zu teilen, einander kennenzulernen, Anknüpfungspunkte zu finden und uns über inhaltliche Themen auszutauschen.
                    <br /><br />
                    Ein solches Format ist bis zu einem gewissen Punkt wachstumsfähig, es ist auch denkbar, hier dann physische Treffen einzuflechten, wenn sie die Möglichkeiten dazu ergeben. 
                </template>
            </TitleParagraphItem>
        </section>

        <section class="px-5 py-10 bg-dark text-snow">
            <TitleParagraphItem class="text-snow drop-shadow-contrast">
                <template #paragraph>
                    Fakt ist, es ist eine Reise und wir werden an den Erfahrungen wachsen. 
                    <br /><br />
                    Du hast Lust uns auf dieser Reise zu begleiten, willst mitgestalten und glaubst ebenso an unsere Grundsätze?
                </template>
            </TitleParagraphItem>
        </section>

        <img
            class="object-cover"
            src="@assets/media/alexander-milo-HwxVLhLyg2s-unsplash.jpg"
            alt="Unser Weg"
        />

        <section class="px-5 py-10 bg-rich-electric-blue">
            <TitleParagraphItem class="text-snow">
                <template #title>
                    Werde Teil dieser wachsenden Community.
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'mail'"
                :classes="'bg-snow'"
                class="mt-5"
            >
                Melde dich bei uns
            </SquircleButton>
        </section>
    </main>
</template>
