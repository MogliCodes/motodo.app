// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: {
                class: 'bg-cover bg-gradient-to-b from-primary-lighter dark:from-mc-blue to-primary-darker dark:to-mc-blue-darker'
            }
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@pinia/nuxt',],
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: {
            login: '/login',
            callback: '/'
        }
    }
})
