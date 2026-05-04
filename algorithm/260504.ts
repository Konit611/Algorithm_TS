function findMaxConsecutiveOnes(nums: number[]): number {
    let maxNums = 0;
    let cnt = 0;
    for (let num of nums) {
        if (num === 0) {
            if (maxNums < cnt) {
                maxNums = cnt
            };
            cnt = 0;
            continue;
        }
        cnt++;
    }
    if (maxNums < cnt) {
        maxNums = cnt
    };
    return maxNums;
};

const nums = [1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(nums));