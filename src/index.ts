// From https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-353494273
// Fixes Object.keys loosing type info
const keys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[]
}

type HtmlFormat = {
  className: string
  tag?: string
}

export const createRenderer = <T extends string>(
  classes: Record<T, HtmlFormat>,
): ((node: Partial<Record<T, string>>[]) => string) => {
  return (texts) => {
    let result = ''
    texts.forEach((item) => {
      keys(item).forEach((key) => {
        const tag = classes[key].tag || 'span'
        result += `<${tag} class="${classes[key].className}">${item[key]}</${tag}>`
      })
    })
    return result
  }
}
