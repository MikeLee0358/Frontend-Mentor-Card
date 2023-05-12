export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('id', {
        mounted(el, binding) {
            if (!el.parentElement) return
            const idValue = binding.value
            const parentIdValue = el.parentElement.id
            changeDomId(idValue, parentIdValue)


            function changeDomId(idValue: string, parentIdValue: string) {
                if (!parentIdValue || parentIdValue === '__nuxt') el.id = idValue
                else el.id = `${parentIdValue}__${idValue}`

            }
        }

    })
})




