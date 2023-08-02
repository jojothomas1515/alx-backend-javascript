export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '' && typeof word === 'string') {
    return Array.from(set).filter((w) => w.startsWith(word) && (w.slice(word.length) !== ''))
      .map((w) => w.substring(word.length))
      .join('-');
  }
  return '';
}
