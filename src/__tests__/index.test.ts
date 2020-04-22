import { createRenderer } from '../index'

test('Testing createRenderer', () => {
  const renderer = createRenderer({ bold: 'boldClass', italic: 'italicClass' })

  expect(renderer([{ bold: 'some-bold-text' }])).toBe(
    '<p class="boldClass">some-bold-text</p>',
  )

  expect(
    renderer([{ italic: 'some-italic-text' }, { bold: 'some-bold-text' }]),
  ).toBe(
    '<p class="italicClass">some-italic-text</p><p class="boldClass">some-bold-text</p>',
  )
})
