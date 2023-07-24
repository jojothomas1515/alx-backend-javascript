/**
 * # taskFirst
 *
 * @description: "makes a constant string"
 * ## Returns
 * @returns: a string
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * # getLast
 * @returns: "is okay"
 */
export function getLast() {
  return ' is okay';
}

/**
 * # taskNext
 * ## Description
 * creates a string with let and concatenate to it with
 * the return value from ```getLast()```
 * @returns the concatenated value.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
