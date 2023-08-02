export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '' && word instanceof String) {
    return Array.from(set).filter((w) => w.startsWith(word) && (w.slice(word.length) !== ''))
      .map((w) => w.substring(word.length))
      .join('-');
  }
  return '';
}
