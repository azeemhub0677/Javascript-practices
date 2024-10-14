// QS1  DELETE THE NUMBER

// let arr=[1,2,3,4,5,6,2,3];
// num=2;

// for(let i=0;i<arr.length;i++) {
//     if(arr[i]==num){
//     arr.splice(i,1);
//     console.log(arr);
//     }
// }


// qs2 FIND THE NUMBER OF DIGITS

// let number=25785585;
// let count =0;

// let copy=number;

// while(copy>0) {
//     copy=Math.floor(copy/10);
//     count++;
// }
// console.log(count);

// qs3  SUM OF DIGITS NUMBER

// let number=2222458;
// let sum=0;

// let copy=number;

// while(copy>0){
//     digit = copy % 10;
//     sum+=digit;               //sum=sum+digit;
//     copy=Math.floor(copy/10);
        
// }
// console.log(sum);

//qs4  FIND FACTORIAL

// let n=7;
// let factorial=1;

// for(let i=1;i<=n;i++){
//     factorial*=i;        //factorial=factorial*i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

//qs5 FIND LARGEST NUMBER IN A ARRYA 

let arr=[2,5,10,4,2,22,7,1,9];
let largest=0;

for(let i=0; i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);