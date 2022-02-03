import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/module',
    './src/runtime/plugin',
  ],
  clean: true,
  declaration: true,
})