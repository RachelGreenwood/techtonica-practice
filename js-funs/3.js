// 1. Create an array of numbers, (ex: [1, 2, 3])
let arr = [1, 2, 3, 4, 5];

// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
console.log(arr[0]);

//   - Return the last item in the array (ex: 3)
console.log(arr[arr.length - 1]);

//   - Add a new item to the end of the array (ex: [1,2,3,4])
arr.push(6);

//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
arr.unshift([-3, -2, -1, 0]);

//   - Return the first item from the first item in the array. (ex: "a")
console.log(arr[0][0]);