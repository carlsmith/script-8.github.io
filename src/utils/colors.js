const all = [
  'rgb(246,214,189)',
  'rgb(195,163,138)',
  'rgb(153,117,119)',
  'rgb(129,98,113)',
  'rgb(78,73,95)',
  'rgb(32,57,79)',
  'rgb(15,42,63)',
  'rgb(8,20,30)'
]

const rgbs = [
  [246,214,189],
  [195,163,138],
  [153,117,119],
  [129,98,113],
  [78,73,95],
  [32,57,79],
  [15,42,63],
  [8,20,30],
]

// const all = [
//   '#f6d6bd',
//   '#c3a38a',
//   '#997577',
//   '#816271',
//   '#4e495f',
//   '#20394f',
//   '#0f2a3f',
//   '#08141e'
// ]

const colors = {
  all,
  one (i) {
    return all[i % all.length]
  },
  rgb (i) {
    return rgbs[i % rgbs.length]
  }
}

export default colors
