import { defineNuxtPlugin } from '#app'
import { useRouter } from '#imports'
export default defineNuxtPlugin(nuxtApp => {
  // console.log('Oopsy plugin loaded.')

  return {
    provide: {
      oopsy: (code: Number) => {
        console.log(nuxtApp)
        const router = useRouter()
        router.push('/returnError/' + code)
      },
    },
  }
})
