<script setup>
// Vite不支援SSR模式的import.meta.url方法，因為瀏覽器和伺服器對於JS模擬該方法的方式不同
// 解決動態批量載入圖片的方法
// 1: 靠import圖片近來，放Ａrray內。
// 2: 把圖片放在ＣＤＮ上，連結網址就好。(最佳解)
import img1 from "@/assets/images/icon-memory.svg";
import img2 from "@/assets/images/icon-reaction.svg";
import img3 from "@/assets/images/icon-verbal.svg";
import img4 from "@/assets/images/icon-visual.svg";

const dummyData = [
    {
        id: 0,
        name: "Memory",
        src: img1,
        score: 80,
    },
    {
        id: 1,
        name: "Reaction",
        src: img2,
        score: 92,
    },
    {
        id: 2,
        name: "Verbal",
        src: img3,
        score: 61,
    },
    {
        id: 3,
        name: "Visual",
        src: img4,
        score: 72,
    },
];
</script>

<template lang="pug">
div(id='Item', v-for='data in dummyData', :key='data.id')
    div(v-id="'Box-Title'")
        img(v-id="'Img'", :src='data.src')
        span(v-id="'Title'") {{ data.name }}
    div(v-id="'Box-Text'")
        strong(v-id="'Strong'") {{ data.score }}
        span(v-id="'Text'") / 100
</template>

<style lang="sass">
#Item
    display: flex
    justify-content: space-between
    font-size: 1.25rem
    padding: .75rem
    border-radius: 1.5vw
    &__Box-Title
        display: flex
        gap: .75vw
    &__Box-Text
        display: flex
        gap: .75vw
        &__Strong
            color: black
        &__Text
            color: var(--color-white--dark)
    &:nth-child(1)
        color: var(--color-memory)
        background: var(--color-memory-bg)
    &:nth-child(2)
        color: var(--color-reaction)
        background: var(--color-reaction-bg)
    &:nth-child(3)
        color: var(--color-verbal)
        background: var(--color-verbal-bg)
    &:nth-child(4)
        color: var(--color-visual)
        background: var(--color-visual-bg)
</style>
