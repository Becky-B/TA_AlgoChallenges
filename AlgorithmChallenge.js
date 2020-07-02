// // This Length, That Value
// function ThisLengthThatValue(num1, num2){
//     if(num1 == num2){
//         return "Jinx!";
//     }
//     let newArr = [];
//     newArr.length = num1;
//     for(let i = 0; i < newArr.length; i++){  // to clean up the code, I could write it as i< num1
//         newArr[i] = num2;
//     }
//     return newArr;
// }
// console.log(ThisLengthThatValue(6,3))


// // Count Positives
// function CountPositives(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             count ++;
//         }
//     }
//     arr[arr.length-1] = count;
//     // console.log(count);
//     return arr;
// }
// var arr = [5,-3,9,-8,2];
// console.log(CountPositives(arr))



// Push Front
// function PushFront(arr, num){
//     let tempArr = [];
//     tempArr[0] = num;
//     for(let i = 0 ; i < arr.length; i ++){
//         tempArr[i+1] = arr[i];
//     }
//     return tempArr;
// }
// console.log(PushFront([1,8,7,9,6], 4))



// Pop Front
// function PopFront(arr){
//     let tempArr = [];
//     for(let i = 1; i < arr.length; i++){
//         tempArr[i-1] = arr[i];
//     }
//     return tempArr;
// }
// console.log(PopFront([4,8,9,6,3,4]))


// Arr Reverse
// function reverseArray(arr){
//     let temp;
//     for (let i = 0 ; i < arr.length/2; i++){
//         temp = arr[i];
//         for(let j = arr.length-1-i; j >= 0 ; j--){
//             arr[i] = arr[j];
//             arr[j] = temp
//             break
//         }
//     }
//     return arr
// }
// console.log(reverseArray([8,7,5,9,3,20]))



// Acronyms
// function Acronyms(string){
//     if(string == ""){
//         return "too bad, no acronym for you :("
//     }
//     let newString = string[0];
//     for(let i = 0; i < string.length; i++){
//         if(string[i] == " "){
//             newString += string[i+1];
//         }
//     }
//     return newString
// }
// console.log(Acronyms("It's Saturday Night Live!"))



// String Reverse
// function reverseString(str){
//     if(str == ""){
//         return "too bad, no acronym for you :("
//     }
//     let tempStr = "";
//     for(let i = str.length -1; i >= 0; i--){
//         tempStr += str[i];
//     }
//     return tempStr
// }
// console.log(reverseString("creature"))


class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

     // Add to front
    addToFront(value) {
        var newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // Contains
    contains(value) {
        if(this.head == null){
            return false;
        }
        let runner = this.head;
        while(runner != null) {
            if(runner.value == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }