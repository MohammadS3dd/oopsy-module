<template>
    <div class="flex h-screen justify-center items-center text-red-500 text-4xl">{{ code }}</div>
</template> 
<script setup>
const nuxtApp = useNuxtApp()
const route = useRoute()
const code = route.params.code
if (process.server) {
    const nuxtApp = useNuxtApp()
    const error = new Error()
    error.statusCode = code
    nuxtApp.ssrContext.nuxt.error = error;
}


</script>