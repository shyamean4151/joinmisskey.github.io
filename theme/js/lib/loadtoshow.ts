import { tsShow } from "./toshow"

import onLoad from "./onLoad"

export class LoadToShow {
  public ini: HTMLElement
  public loaded = false

  constructor(ini: HTMLElement = document.getElementById("ini")) {
    this.ini = ini
    const his = this

    onLoad(() => {
      his.loaded = true
      his.show()
    })

    setTimeout(() => {
      if (!his.loaded) his.show()
    }, 10000)
  }

  public show = (): void => {
    for (const el of document.getElementsByClassName("loadts") as unknown as HTMLElement[]) {
      tsShow(el)
    }
  }
}
