<template>
    <div>index</div>
    <button @click="$oopsy(301)">301</button>
</template>

<script setup>
const nuxtApp = useNuxtApp()
console.log('oopsy', nuxtApp.$oopsy);
</script>