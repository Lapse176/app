/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getInfoAnchor } from "../helpers/getInfoAnchor"
import { int } from "../utils/float"
import { getAttrs } from "../utils/getAttrs"
import { getPathName } from "../utils/getPathName"
import { getText } from "../utils/getText"
import { parserDOM } from "../utils/parserDOM"

export async function Phim_Id(html: string) {
  const dom = parserDOM(html)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const name = getText(dom.querySelector(".Title")!)
  const othername = dom.querySelector(".SubTitle")?.textContent

  const { src: image } = getAttrs(dom.querySelector(".Image img")!, ["src"])
  const { src: poster } = getAttrs(dom.querySelector(".TPostBg")!, ["src"])
  const pathToView = dom.querySelector(".watch_button_more")
    ? getPathName(
        dom.querySelector(".watch_button_more")!.getAttribute("href")!
      )
    : null
  const description = getText(dom.querySelector(".Description")!)
  const rate = int(dom.querySelector("#average_score")?.textContent)
  const count_rate = int(dom.querySelector(".num-rating")?.textContent)
  const duration = dom.querySelector(".AAIco-access_time")?.textContent
  const yearOf = int(dom.querySelector(".AAIco-date_range > a")?.textContent)
  const views = int(
    dom
      .querySelector(".AAIco-remove_red_eye")
      ?.textContent?.match(/[\d,]+/)?.[0]
      ?.replace(/,/g, "")
  )
  const season = Array.from(dom.querySelectorAll(".season_item > a")).map(
    getInfoAnchor
  )
  const genre = Array.from(dom.querySelectorAll(".breadcrumb > li > a"))
    .slice(1)
    .map(getInfoAnchor)
  const quality = dom.querySelector(".Qlty")?.textContent

  // ==== info ====
  const status = dom
    .querySelector(".mvici-left > .InfoList > .AAIco-adjust:nth-child(2)")
    ?.childNodes[1].textContent?.trim()
  const author = dom
    .querySelector(".mvici-left > .InfoList > .AAIco-adjust:nth-child(4) > a")
    ?.textContent?.trim()
  const contries = Array.from(
    dom.querySelectorAll(
      ".mvici-left > .InfoList > .AAIco-adjust:nth-child(5) > a"
    )
  ).map(getInfoAnchor)
  const follows = int(
    dom
      .querySelector(".mvici-left > .InfoList > .AAIco-adjust:nth-child(6)")
      ?.childNodes[1].textContent?.trim()
      ?.replace(/,/g, "")
  )
  const language = dom
    .querySelector(".mvici-right > .InfoList > .AAIco-adjust:nth-child(4)")
    ?.childNodes[1].textContent?.trim()
  const studio = dom
    .querySelector(".mvici-right > .InfoList > .AAIco-adjust:nth-child(5)")
    ?.childNodes[1].textContent?.trim()
  const seasonOf = dom.querySelector(
    ".mvici-right > .InfoList > .AAIco-adjust:nth-child(6) > a"
  )?.textContent
  const trailer = dom.querySelector("#Opt1 iframe")?.getAttribute("src")

  const followed = dom.querySelector(".added") !== null

  return {
    name,
    othername,
    image,
    poster,
    pathToView,
    description,
    rate,
    count_rate,
    duration,
    yearOf,
    views,
    season,
    genre,
    quality,
    status,
    author,
    contries,
    follows,
    language,
    studio,
    seasonOf,
    trailer,
    followed,
  }
}