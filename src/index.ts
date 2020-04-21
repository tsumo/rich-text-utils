type RichText = {
  text: string
  attr: ('bold' | 'italic')[]
}

const richTextToHTML = (rt: RichText) => {
  let left = ''
  let right = ''
  if (rt.attr.includes('bold')) {
    left += '<b>'
    right = '</b>' + right
  }
  if (rt.attr.includes('italic')) {
    left += '<i>'
    right = '</i>' + right
  }
  return left + rt.text + right
}

export default richTextToHTML
