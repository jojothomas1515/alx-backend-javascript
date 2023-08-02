export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '' && typeof word === 'string') {
    return Array.from(set).filter((w) => {
      if (w !== undefined) {
        return w.startsWith(word) && (w.slice(word.length) !== '');
      }
      return false;
    })
      .map((w) => w.substring(word.length))
      .join('-');
  }
  return '';
}
