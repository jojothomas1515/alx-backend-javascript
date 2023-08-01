export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '') {
    const li = [];
    set.forEach((w) => {
      if (w.startsWith(word)) {
        li.push(w.slice(word.length));
      }
    });

    return li.join('-');
  }
  return '';
}
