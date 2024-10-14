// qs1

// const arrayAverage = () => {
//   let total=0;
//   for(let number of arr){
//     total += number;
//   }
//   return total / arr.length;
// };

// let arr=[1,2,3,4,5,6];
// console.log(arrayAverage(arr));

//qs2

// let num = 5;
//  const isEven =(num) => num % 2 == 0;
// console.log(isEven(num));

//qs3

// const object = {
//     message: 'Hello world!',
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

//qs4

let length =4;
function callback () {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback,1,2);