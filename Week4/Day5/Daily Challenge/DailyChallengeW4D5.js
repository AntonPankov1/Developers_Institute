function isAnagram(sentance1, sentance2) {
    const str1 = sentance1.toLowerCase().split(" ").join("");
    const str2 = sentance1.toLowerCase().split(" ").join("");
    if (str1.length != str2.length) return false;

    const total = {};
    for (const letter of str1) {
        total[letter] = total[letter] + 1 || 1;
    }
    for (const letter of str2) {
        total[letter] = total[letter] ? total[letter] - 1 : -1;
    }
    const differences = Object.values(total);
    return !differences.every((num) => num === 0);
}

const result1 = isAnagram("azdlowaazz", "azdowbazzl")
console.log("result1:", result1);