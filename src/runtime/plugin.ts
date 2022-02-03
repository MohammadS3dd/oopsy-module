import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  console.log('Plugin by my-module!')
  console.log(useNuxtApp()._middleware)

  return {
    provide: {
      oopsy: (code: Number) => {
        console.log(nuxtApp)

        nuxtApp.$router.push('/returnError/' + code)
      },
    },
  }
})
