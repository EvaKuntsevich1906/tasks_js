// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let newArr = []; 

//for of 
// for (let elem of arr) {
//     if (!newArr.includes(elem)) {
//       newArr.push(elem);
//     }
//   }
  
//   console.log(newArr);

  //for
 for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    
    console.log(newArr);
    
