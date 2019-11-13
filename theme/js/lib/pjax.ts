import onReady from "./onReady"

declare global {
  // tslint:disable-next-line: interface-name
  interface Window {
    currentLocale: string
    permalink: string
    locales: string[]
    pathname: string
  }
}

const userLanguage = navigator.language

export const pjaxinit = async () => {
  const { Pjax } = await import("pjax-api")

  const pj = new Pjax({
    areas: [
      "#main, #breadcrumb, #mainnav, #updateTime, #ini_inner",
      "body"
    ],
    update: {
      css: false,
      head: "meta",
      script: false
    }
  })

  function move_locale(targetlang: string) {
    if (targetlang !== window.currentLocale) {
      onReady(() => {
        pj.replace(`/${targetlang}${window.permalink}?moved${window.location.hash}`)
        // window.location.href = `/${targetlang}${window.permalink}?moved${window.location.hash}`
      })
    }
  }

  function iAmNotRobot(): boolean {
    const ua = window.navigator.userAgent.toLowerCase()
    for (const text of [
      "googlebot",
      "google.com/bot",
      "google.com/feedfetcher",
      "bingbot",
      "bing.com/bingbot",
      "bingpreview",
      "msnbot",
      "search.msn.com/msnbot",
      "ahrefsbot",
      "ahrefs.com/robot",
      "baiduspider",
      "baidu.com/search/spider",
      "yandexbot",
      "yandex.com/bots",
      "slurp",
      "help.yahoo.com/help/us/ysearch/slurp"
    ]) if (ua.indexOf(text) !== -1) return false
    return true
  }

  if (
    (window.currentLocale !== "false" || window.location.pathname === window.pathname)
    && iAmNotRobot()
  ) {
    if (window.location.search.indexOf("moved") === -1) {
      if (window.locales.indexOf(userLanguage) >= 0) {
        move_locale(userLanguage)
      } else if (window.locales.indexOf(userLanguage.slice(0, 2)) >= 0) {
        move_locale(userLanguage.slice(0, 2))
      } else if (window.currentLocale !== "en") {
        move_locale("en")
      }
    } else {
      history.replaceState(null, null, window.location.href.replace(/\?[^#]*/, ""))
    }
  }

  return pj
}