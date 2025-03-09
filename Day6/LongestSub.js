const lengthOfLongestSubstring = (s) => {
    let newMap = new Map();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (newMap.has(s[right]) && newMap.get(s[right]) >= left) {
            left = newMap.get(s[right]) + 1;
        }
        newMap.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


console.log(lengthOfLongestSubstring("abcabcbb")); 