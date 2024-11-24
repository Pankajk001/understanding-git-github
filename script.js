// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr1 = arr.map((ele, i, arr) => {
//     return ele*2;
// })

// console.log(newArr1)

// const newArr2 = arr.filter((ele, i, arr) => {
//     // if(ele%2 == 0) return ele;
//     return (ele%2 == 0);
// })

// console.log(newArr2)

// const newArr3 = arr.reduce((acc, curr, i, arr) => {
//     acc.push(curr * 3);
//     return acc;
// }, [])

// console.log(newArr3)

// console.log(arr)

// arr.forEach((ele, i, arr) => {
//     arr[i] = ele + 1;
// })

// console.log(arr)


// const square = function (x){
//     return x*x;
// }

// // console.log(add(5))

// arr.forEach(function(ele, i) {
//     arr[i] = ele + 5;
// })

// console.log(arr)

// var arr1 = [5, 6, 7]

// function x(num){
//     console.log(num);
// }

// x(arr1)

let a = [1,2, 3, 4, 5, 6];
console.log(a); // 1

a.forEach((ele, i, a) => {
    a[i] = ele * 2;
})

console.log(a) // 2

function usingPromise(ele, idx){
    return new Promise((resolve, reject) => {
        if(ele % 2 == 0){
            resolve(a[idx] = ele*2)
        }
        else reject(a[idx] = ele - 1)
    })
}

  // Using Promise with array
  a.forEach((element, idx) => {
    usingPromise(element, idx)
      .then((res) => {
        a[idx] = res; 
      })
      .catch((res) => {
        a[idx] = res;  
      });
  });

  console.log(a); // 4


  var b = 1034;
  console.log(b) // 3


  console.log({a:1} == {a:1})

  console.log(this)


function add(a, b){
    console.log(this);
}

add(1, 2)

function fetchData(url){
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => {
      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      return res.json();
    })

    .then((data) => {
      resolve(data);
    })

    .catch((error) => {
      reject(error);
    })
      
  })
}

const apiURL = "https://jsonplaceholder.typicode.com/posts";

fetchData(apiURL).then((data) => {
  console.log("API Data", data);
})
.catch((error) => {
  console.log("Error fetching data:", error)
})


async function fetchData1(url){
  try{
    const res = await fetch(url);
    if(!res.ok){
      throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 status codes

    }

    const data = await res.json();
    console.log("API DATA", data);
  } 
  catch(error){
    console.log("Error fetching data:", error);

  }
}

fetchData1(apiURL)

const age = 23;
const name1  = 'Pankaj Kumar'

function isAbove(){
  return age >= 18
}

function isBelow(){
  return age < 18
}

console.log(firstName, lastName);