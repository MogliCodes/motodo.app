// import path from 'path'
// import {defineConfig} from 'vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Vue from '@vitejs/plugin-vue'
//
// // Overwrite `apply` of `plugin-vue` so that it
// // only applies on `test` mode. Otherwise `npm run build` will fail
// // with:
// // ```sh
// //  ERROR  Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).
// // ```
// // Read for apply: https://vitejs.dev/guide/api-plugin.html#conditional-application
// const pluginVue = Vue()
// pluginVue.apply = (_, {mode}: { mode: string }) => {
//     // apply only on `test` so that `vitest` understands vue. Else `vitest` will say:
//     // ```sh
//     // Error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
//     // ```
//     // guess: because nuxt already applies its own template transformation
//     return mode === 'test'
// }
//
// export default defineConfig({
//     resolve: {
//         alias: {
//             '~': path.resolve(__dirname),
//             // resolve nuxt auto imports to be able to mock them in tests
//             '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
//         },
//     },
//     plugins: [
//         pluginVue,
//         AutoImport({
//             imports: ['vue'],
//         }),
//     ],
// })
