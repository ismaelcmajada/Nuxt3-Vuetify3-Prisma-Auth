export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook("render:response", (response: any) => {
		response.body = response.body.replaceAll("/_nuxt/\0", "/_nuxt/");
	});
});