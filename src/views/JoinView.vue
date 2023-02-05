<script setup>
    import TitleParagraphItem from "@components/TitleParagraphItem.vue";
    import JumboHeader from "@components/JumboHeader.vue";
    import SquircleButton from "@components/SquircleButton.vue";
</script>

<template>
    <main class="bg-dark">
        <JumboHeader
            :src="'lawrence-kayku-frWOcVisp8U-unsplash.jpg'"
        >
            <template #title>
                Sei ein Teil davon
            </template>

            <template #paragraph>
                Wir sind der Meinung, dass wir miteinander nicht nur mehr bewirken, sondern auch aneinander wachsen können. Auf unserer Reise mit fortomorrow freuen wir uns auf alle, die mit uns einen nachhaltig positiven Beitrag für eine hoffnungsvolle Zukunft leisten wollen.
            </template>
        </JumboHeader>

        <section class="px-5 py-10 bg-snow">
            <TitleParagraphItem class="text-dark">
                <template #title>
                    Projekt, Unternehmen oder Initiative.
                </template>

                <template #paragraph>
                    Du bist für ein laufendes Projekt verantwortlich, glaubst an das Potenzial und bist offen für partnerschaftliche Kollaboration? Dann lass uns die Köpfe zusammenstecken, so richtig auf die Tube drücken und das nächste Level erreichen!
                    <br /><br />
                    Es spielt dabei keine Rolle, ob es bereits etabliert ist oder nicht. Sind Idee und Konzept überzeugend, finden wir gemeinsam heraus was du brauchst und was wir für ideale Bedingungen für gesundes Wachstum beitragen können. 
                    <br /><br />
                    Wir freuen uns auf deine Kontaktaufnahme!
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'mail'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Melde dich bei uns
            </SquircleButton>
        </section>
        
        <section class="text-snow px-5 py-10">
            <TitleParagraphItem>
                <template #title>
                    Allem ein Anfang.
                </template>

                <template #paragraph>
                    Vielleicht hast du auch eine Idee, die du eigentlich gerne umsetzen würdest, weisst jedoch nicht weiter? Du hast schon ein laufendes Projekt, kommst damit aber nicht vom Fleck und brauchst einen Blick von aussen? Du bist mit deinen Gedanken noch in einem sehr frühen Stadium und möchtest dich einmal gezielt mit jemandem darüber austauschen?
                    <br /><br />
                    Lass uns gemeinsam den ersten Schritt gehen und schauen, wie wir dich auf deinem Weg unterstützen können.
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'mail'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Melde dich bei uns
            </SquircleButton>
        </section>

        <section class="text-dark px-5 py-10 bg-snow">
            <TitleParagraphItem>
                <template #title>
                    Wirke mit uns zusammen.
                </template>

                <template #paragraph>
                    Du bist offen für Neues, willst deinen eigenen positiven Impact vergrössern, Teil von etwas Grösserem sein, Gleichgesinnte kennen lernen und einen neuen Weg ausprobieren? 
                    <br /><br />
                    Wir freuen uns dich kennenzulernen und gemeinsam mit dir zu schauen, wie wir dich in unserem fortomorrow-Netzwerk aufnehmen können.
                </template>
            </TitleParagraphItem>

            <SquircleButton
                :icon="'mail'"
                :classes="'bg-coal'"
                class="mt-5"
            >
                Melde dich bei uns
            </SquircleButton>
        </section>
    </main>
    <!-- <div class="bg-[url('./src/assets/media/Sunrise-ISS.jpg')] absolute top-[90vh] w-full h-96 bg-cover bg-center bg-no-repeat"></div> -->
    <!-- <div class="intro-bg bg-[url('media/sunrise-over-Earth_1600.jpg')] bg-[length:150%_auto] bg-center bg-no-repeat absolute top-[80vh] w-full h-[500px] rotate-180">
        <div class="bg-gradient-to-b from-black via-transparent to-transparent w-full h-full"></div>
    </div> -->
</template>
