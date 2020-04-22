// From https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-353494273
// Fixes Object.keys loosing type info
const keys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[]
}

export const createRenderer = <T extends string>(
  classes: Record<T, string>,
): ((node: Partial<Record<T, string>>[]) => string) => {
  return (texts) => {
    let result = ''
    texts.forEach((item) => {
      keys(item).forEach((key) => {
        result += `<p class="${classes[key]}">${item[key]}</p>`
      })
    })
    return result
  }
}
