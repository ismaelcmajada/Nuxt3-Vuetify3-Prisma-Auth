import { RouteLocationNormalized } from 'vue-router';

export default function useRelativeCallbackUrl(route: RouteLocationNormalized) {
    const callbackUrl = computed(() => {
      const callbackUrlParam = route.query.callbackUrl
      if (typeof callbackUrlParam === "string" && callbackUrlParam.length > 0) {
        const url = new URL(callbackUrlParam)
        return url.pathname + url.search + url.hash
      } else {
        return "/"
      }
    });
  
    return callbackUrl
  }