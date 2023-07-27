/* eslint-disable */
import ClassRoom from "../0-classroom";

test("test the ClassRoom class", () => {
  const room = new ClassRoom(22);
  expect(room._maxStudentsSize).toBe(22);
});
test("test the ClassRoom class with negative number", () => {
  const room = new ClassRoom(-100);
  expect(room._maxStudentsSize).toBe(-100);
});
