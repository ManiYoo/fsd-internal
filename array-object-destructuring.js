const student = {
  name: "test",
  rollno: "xyz",
  std: "4",
  location: {
    place: "Hyderabad",
    dist: "rr",
  },
  age: 19,
};
const {
  name,
  rollno,
  location: { place, dist },
  age,
} = student;
console.log(name, rollno, place, dist, age);
const colors = ["red", "green", "blue"];
const [a, b, c] = colors;
console.log(a, b, c);
