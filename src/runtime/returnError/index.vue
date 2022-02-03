<template>
    <div>working</div>
</template>
<script setup>
import { useNuxtApp } from '#app'


definePageMeta({
    middleware: 'oopsy-redirect'
})
const nuxtApp = useNuxtApp()
const error = (code) => {
    const errorObj = new Error(`Error ${code}`)
    const router = useNuxtApp().$router


}
const route = nuxtApp._route || nuxtApp.$route
const code = route.params.code
error(code)
</script>