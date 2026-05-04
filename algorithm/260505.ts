function findErrorNums(nums: number[]): number[] {
    let numArr = new Array(nums.length).fill(0);
    let answer = new Array(2);
    for (let num of nums) {
        numArr[num-1] ++;
    }
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > 1) {
            answer[0] = i + 1;
        }
        
        if (numArr[i] === 0) {
            answer[1] = i + 1;
        }
    }
    return answer;
};

let nums = [1,2,2,4];
let nums_1 = [1,1];
let nums_2 = [2,2];

console.log(findErrorNums(nums));
console.log(findErrorNums(nums_1));
console.log(findErrorNums(nums_2));