{
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    
    // const sumArray = (numArray: number[]): number => {
    //     let sum = 0;
    //     for (let num of numArray) {
    //         sum += num;
    //     }
    //     return sum;
    // }

    
    const sumArray = (numArray: number[]): number => {
        let count = 0;
        numArray.forEach((num) => count += num)
        return count;
    }

    console.log(sumArray([1,2,3,1,2,3]))















}