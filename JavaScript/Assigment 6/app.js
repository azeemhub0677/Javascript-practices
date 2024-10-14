// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num =5;

// //element larger than a number num

// function getElements (arr,num) {
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]>num) {
//              console.log(arr[i]);
//         }
//     }
// }

// getElements(arr,num);


// // QS2

// //function to get string with all Unique elements

// function getUnique(str){
//     let ans="";
//     for (let i=0; i<str.length; i++){
//         let currchar=str[i];
//         if (ans.indexOf(currchar) == -1) {

//            //if current character is not added, then add it in ans.
//            //otherwise it is a duplicate.

//            ans+=currchar; 
//         }
//     }
//     return ans;
// }

// getUnique(str);let str="abcdabcdefgggh";

function extractUniqueCharacters(str) {
    // Create a Set to store unique characters
    let uniqueChars = new Set();

    // Iterate through each character in the string
    for (let char of str) {
        // Add each character to the Set
        uniqueChars.add(char);
    }

    // Convert the Set back to a string
    return [...uniqueChars].join('');
}

// Example usage
let str = "abcdabcdefgggh";
let result = extractUniqueCharacters(str);
console.log(result); // Output: "abcdefgh"
