import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  console.log('Oopsy plugin loaded.')

  return {
    provide: {
      oopsy: (code: Number) => {
        console.log(nuxtApp)

        nuxtApp.$router.push('/returnError/' + code)
      },
    },
  }
})
