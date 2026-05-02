function shuffle(nums: number[], n: number): number[] {
    const answer: number[] = [];

    for (let i = 0; i < n; i++) {
        answer.push(nums[i]!);
        answer.push(nums[i+n]!)
    }

    return answer;
};

const nums = [1,2,3,4,4,3,2,1];
const n = 4;

console.log(shuffle(nums, n));