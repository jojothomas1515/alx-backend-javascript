export default function cleanSet(set, word = '') {
  if (set instanceof Set && word !== '') {
    const li = [];
    set.forEach((w) => {
      if (w.startsWith(word)) {
        const res = w.slice(word.length);
        if (res !== '') { li.push(res); }
      }
    });

    return li.join('-');
  }
  return '';
}
