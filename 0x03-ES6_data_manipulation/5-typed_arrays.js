export default function createInt8TypedArray(length, position, value) {
  const Buf = new ArrayBuffer(length);
  const i8view = new Int8Array(Buf);
  if (i8view.length - 1 < position) {
    throw Error('Position outside range');
  }
  i8view[position] = value;
  return Buf;
}
