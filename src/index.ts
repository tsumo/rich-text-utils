type HtmlFormat = {
  className: string
  tag?: string
}

export const createHtmlRenderer = <T extends string>(
  classes: Record<T, HtmlFormat>,
): ((data: [T, string][]) => string) => {
  return (texts) => {
    let result = ''
    texts.forEach(([format, text]) => {
      const tag = classes[format].tag || 'span'
      result += `<${tag} class="${classes[format].className}">${text}</${tag}>`
    })
    return result
  }
}

type CustomFormatter = (text: string) => string

export const createCustomRenderer = <T extends string>(
  formatters: Record<T, CustomFormatter>,
): ((data: [T, string][]) => string) => {
  return (texts) => {
    let result = ''
    texts.forEach(([format, text]) => {
      result += formatters[format](text)
    })
    return result
  }
}
