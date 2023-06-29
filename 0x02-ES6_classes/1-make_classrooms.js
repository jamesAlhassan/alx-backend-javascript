import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  let first = new ClassRoom(19);
  let second = new ClassRoom(20);
  let third = new ClassRoom(34);

  return [first, second, third];
}
