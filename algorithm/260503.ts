function shuffle(nums: number[], n: number): number[] {
    const answer: number[] = [];

    for (let i = 0; i < n; i++) {
        answer.push(nums[i]!);
        answer.push(nums[i+n]!)
    }

    return answer;
};

function shuffleUsingMap(nums: number[], n: number): number[] {
    return nums.map((_, i) => (i % 2 === 0 ? nums[i / 2]! : nums[n + (i - 1) / 2]!));
}

const nums = [1,2,3,4,4,3,2,1];
const n = 4;

console.log(shuffle(nums, n));