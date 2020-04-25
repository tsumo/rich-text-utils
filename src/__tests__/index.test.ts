import { createHtmlRenderer, createCustomRenderer } from '../index'

describe('createHtmlRenderer', () => {
  test('basic functionality', () => {
    const renderer = createHtmlRenderer({
      bold: { className: 'bold-class', tag: 'div' },
      italic: { className: 'italic-class' },
    })

    expect(renderer([['bold', 'some bold text']])).toBe(
      '<div class="bold-class">some bold text</div>',
    )

    expect(
      renderer([
        ['italic', 'some italic text'],
        ['bold', 'some bold text'],
      ]),
    ).toBe(
      '<span class="italic-class">some italic text</span><div class="bold-class">some bold text</div>',
    )
  })

  test('empty string in tag defaults to span', () => {
    const renderer = createHtmlRenderer({
      bold: { className: 'bold-class', tag: '' },
    })

    expect(renderer([['bold', 'some bold text']])).toBe(
      '<span class="bold-class">some bold text</span>',
    )
  })
})

describe('createCustomRenderer', () => {
  test('basic functionality', () => {
    const renderer = createCustomRenderer({
      bold: (text) => `## ${text} ##`,
      italic: (text) => `__ ${text} __`,
    })

    expect(renderer([['bold', 'some bold text']])).toBe('## some bold text ##')

    expect(
      renderer([
        ['italic', 'some italic text'],
        ['bold', 'some bold text'],
      ]),
    ).toBe('__ some italic text __## some bold text ##')
  })
})
