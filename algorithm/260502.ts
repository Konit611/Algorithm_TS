// https://leetcode.com/problems/concatenation-of-array/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i

function getConcatenation(nums: number[]): number[] {
    return nums.concat(nums);
};

const nums = [1, 2, 3];

console.log(getConcatenation(nums));