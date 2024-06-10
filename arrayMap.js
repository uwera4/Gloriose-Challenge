function hasContiguousSubarrayWithSum(arr, target) {
    let sum = 0;
    let start = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            end = i;
            return {
                exists: true,
                subarray: arr.slice(start, end + 1)
            };
        }
    }

    return {
        exists: false,
        subarray: []
    };
}

// Test case
const { exists, subarray } = hasContiguousSubarrayWithSum([4, 2, 7, 1, 9, 5], 17);
console.log("Exists:", exists);
console.log("Subarray:", subarray);