<template>
    <div class="oopsy__error">{{ code }}</div>
</template> 
<style >
.oopsy__error {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: inherit;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: rgba(239, 68, 68, 1);
}
</style>
<script setup>
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
const route = nuxtApp._route || nuxtApp.$route
const code = route.params.code
if (process.server) {
    const error = new Error()
    error.statusCode = code
    nuxtApp.ssrContext.nuxt.error = error;
}


</script>