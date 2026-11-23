const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  
  let studentReduce = students.reduce((sum,score)=> sum + score.score,0 )
  console.log(studentReduce);
  let count = studentReduce / students.length
  console.log(count);
  return count
  // Start coding here
}

getAverageStudentScore(students); // Output: 87.5
const result = getAverageStudentScore(students)
console.log(result);
