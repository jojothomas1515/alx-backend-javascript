export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const callCount = weakMap.get(endpoint);
    if (callCount >= 5) {
      throw Error('Endpoint load is high');
    }
    weakMap.set(endpoint, callCount + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
