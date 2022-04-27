import { useEffect } from "react";
import Counter from "./Counter";

const timeOut = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('time out')
    resolve();
  }, ms);
});
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// function addFunc(adder, ...theArgs) {
//   return theArgs.map(x => x + adder);
// }
// function timeOut() {
//   setTimeout(() => {
//     console.log('Timeout')
//   }, 300);
// }
function main() {
  console.log('start')
  timeOut(300).then(() => {
    console.log('finish')
  });
  // console.log('start');
  // logTimeout.then(res => {
  //   console.log(res)
  //   console.log('finish');
  // });
  // const users = [
  //   {name: 'a', isActive: true},
  //   {name: 'b', isActive: false},
  //   {name: 'c', isActive: true}
  // ];
  // const activeUsers = users.map(user => {
  //   if(user.isActive) {
  //     return user
  //   } else {
  //     return undefined;
  //   };
  // }).filter(item => item !== undefined);
  // console.log('active users: ', activeUsers);
  
  // const user = new User('john', 34);
  // console.log('user:', user);

  // var arr = addFunc(3, 3, 4, 5);
  // console.log(arr);

}

function App() {
  return (
    <Counter />
  )
}

export default App;
