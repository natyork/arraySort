var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(a,b){
    // custom sort function
    if(a.name > b.name) {
      return 1;
    }

    if (a.name === b.name) {
      if(a.age > b.age) {
        return -1;
      }
      if(a.age < b.age){
        return 1;
      }
      if(a.age ===b.age){
        return 0;
      }
    }

    if(a.name < b.name){
      return -1;
    }
})

console.log(students)


// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic' },
//   { name: 'Zeros', value: 37 }
// ];
// // sort by value
// items.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });
// // sort by name