export default function createInt8TypedArray(length, position, value) {
  const Buf = new ArrayBuffer(length);
  const dview = new DataView(Buf);
  if (dview.byteLength - 1 < position) {
    throw Error('Position outside range');
  }
  dview.setInt8(position, value);
  return dview;
}
