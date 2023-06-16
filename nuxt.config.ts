import vuetify from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ["vuetify/styles"],
    sourcemap: { server: false, client: false },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => 
                // @ts-ignore
                config.plugins.push(
                    // Here you can specify a custom styles file for vuetify
                    vuetify({
                        styles: { configFile: "assets/settings.scss" }
                    })
                )
            )
        },
        '@sidebase/nuxt-auth'
    ],
    auth: {
        provider: {
          type: 'authjs',
        },
        globalAppMiddleware: {
          isEnabled: true
        }
    },
    build:{ transpile: ["vuetify"] },
    vite: { ssr: { noExternal: ["vuetify"] } },
    // @ts-ignore
    // Here you can specify a custom font for the app
    googleFonts: {
        families: {
            Poppins: [100, 200, 300, 400 , 500, 600, 700, 800, 900],
        },
        download: false,
        useStylesheet: true
    }
})
