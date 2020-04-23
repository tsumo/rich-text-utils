import { createRenderer } from '../index'

test('createRenderer basic functionality', () => {
  const renderer = createRenderer({
    bold: { className: 'bold-class', tag: 'div' },
    italic: { className: 'italic-class' },
  })

  expect(renderer([{ bold: 'some bold text' }])).toBe(
    '<div class="bold-class">some bold text</div>',
  )

  expect(
    renderer([{ italic: 'some italic text' }, { bold: 'some bold text' }]),
  ).toBe(
    '<span class="italic-class">some italic text</span><div class="bold-class">some bold text</div>',
  )
})

test('empty string in tag defaults to span', () => {
  const renderer = createRenderer({
    bold: { className: 'bold-class', tag: '' },
  })

  expect(renderer([{ bold: 'some bold text' }])).toBe(
    '<span class="bold-class">some bold text</span>',
  )
})
