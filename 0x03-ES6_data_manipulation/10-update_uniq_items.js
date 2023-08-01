export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    const nm = new Map();
    map.forEach((k, v) => {
      if (v === 1) {
        nm.set(k, 100);
      } else {
        nm.set(k, v);
      }
    });
    return nm;
  }
  throw Error('Cannot process');
}
