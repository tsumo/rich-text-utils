import richTextToHTML from '../index'

test('Testing richTextToHTML', () => {
  expect(richTextToHTML({ text: 'testing', attr: ['bold'] })).toBe(
    '<b>testing</b>',
  )

  expect(richTextToHTML({ text: 'testing', attr: ['italic', 'bold'] })).toBe(
    '<b><i>testing</i></b>',
  )
})
