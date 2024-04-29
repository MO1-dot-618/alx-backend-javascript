export default function getListStudents() {
  return [
    [1, "Guillaume", "San Francisco"],
    [2, "James", "Columbia"],
    [5, "Serena", "San Francisco"]
  ].map(([id, firstname, location]) => ({ id, firstname, location }));
}
