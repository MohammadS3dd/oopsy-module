<template>
    <div>index</div>
    <button @click="$oopsy(301)">301</button>
</template>

<script setup>
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
console.log('oopsy', nuxtApp.$oopsy);
</script>