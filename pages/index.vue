<template>
    <div id="Card" v-show="isShow">
        <div v-id="'Panel'">
            <h2 v-id="'Title'">Your Result</h2>
            <div v-id="'ScoreBox'">
                <strong v-id="'Strong'">76</strong>
                <span v-id="'Text'"> of 100</span>
            </div>
            <h1 v-id="'Status'">Great</h1>
            <p v-id="'Content'">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi enim sit
                dicta nihil
                perspiciatis!</p>
        </div>
        <div v-id="'Content'">
            <h2 v-id="'Title'">Summary</h2>
            <section v-id="'ItemBox'">
                <Item />
            </section>
            <button v-id="'Btn'">Continue</button>
        </div>
    </div>
</template>

<script setup>
const isShow = ref(false)
setTimeout(() => {
    console.log('show page')
    isShow.value = true
}, 0)
</script>

<style lang="sass">
#Card 
    max-width: 46rem
    text-align: center
    &__Panel 
        display: grid
        gap: 1rem
        justify-items: center
        background: var(--linear-gradient)
        border-radius: 0 0 var(--border-radius) var(--border-radius)
        padding: var(--padding)
        color: var(--color-white--dark)
        &__ScoreBox 
            display: grid
            width: 10rem
            margin-inline: auto
            background: hsl(var(--background-purple-light))
            aspect-ratio: 1/1
            border-radius: 50%
            &__Strong 
                align-self: end
                display: block
                font-size: 4rem
                color: var(--color-white)
        &__Status 
            color: var(--color-white)
            font-size: 1.75rem
    &__Content 
        padding: var(--padding)
        display: grid
        gap: var(--padding)
        &__Title 
            color: grey
        &__ItemBox 
            display: grid
            gap: .5rem
        &__Btn 
            line-height: 1
            padding: 1rem 2rem
            cursor: pointer
            border-radius: 100vw
            border-style: none
            background-color: grey
            color: var(--color-white)
            &:hover 
                background-color: hsl(var(--background-purple-light))
@media (width > 600px) 
    #Card 
        display: grid
        grid-template-columns: 1fr 1fr
        border-radius: var(--border-radius)
        -webkit-box-shadow: 10px 10px 15px -7px rgba(0, 0, 0, 0.28)
        -moz-box-shadow: 10px 10px 15px -7px rgba(0, 0, 0, 0.28)
        box-shadow: 10px 10px 15px -7px rgba(0, 0, 0, 0.28)
        &__Panel 
            border-radius: var(--border-radius)


</style>