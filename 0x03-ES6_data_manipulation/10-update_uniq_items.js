export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((k, v) => {
      if (v === 1) {
        map.set(k, 100);
      }
    });
    return map;
  }
  throw Error('Cannot process');
}
