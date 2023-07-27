/* eslint-disable */
import ClassRoom from "../0-classroom";
import initializeRooms from "../1-make_classrooms";

test("test for the initializeRooms function", () => {
  const li = initializeRooms();
  expect(li).toStrictEqual(
    [
      new ClassRoom(19),
      new ClassRoom(20),
      new ClassRoom(34),
    ]);
})
