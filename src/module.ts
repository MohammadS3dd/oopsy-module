import { resolve } from 'pathe'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, useNuxt, resolveFiles } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: Boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {
    addPlugin: true,
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'returnError',
        path: '/returnError/:code',
        file: resolve(__dirname, 'runtime/returnError/index.vue'),
      })
      pages.push({
        name: 'oops',
        path: '/oops/:code',
        file: resolve(__dirname, 'runtime/oops/[code].vue'),
      })
    },
    'pages:middleware:extend'(middleware) {
      middleware.push({
        name: 'oopsy-redirect',
        path: resolve(__dirname, 'runtime/middleware/oopsy-redirect.ts'),
        global: false,
      })
      console.log('middlewares', middleware)
    },
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      const middlewareDir = fileURLToPath(
        new URL('./runtime/middleware', import.meta.url)
      )
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
      // const middlewareDir = resolve(nuxt.options.srcDir, nuxt.options.dir.middleware)
      // const files = await resolveFiles(
      //   middlewareDir,
      //   `*{${nuxt.options.extensions.join(",")}}`
      // );
      // const middleware = files.map((path) => ({
      //   name: "oopsy-redirect",
      //   path,
      //   global: true,
      // }));
      // nuxt.callHook("pages:middleware:extend", middleware);
    }

    // nuxt.callHook('pages:extend', (pages: Array<any>) => {
    //   pages.push({
    //     name: 'returnError',
    //     path: '/returnError',
    //     file: resolve(__dirname, 'runtime/returnError/index.vue'),
    //   })
    // })

    console.log(nuxt)
  },
})
