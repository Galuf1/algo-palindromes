exports.palindrome = function(word) {
    const word1 = String(word).toLocaleLowerCase()
    const cleaned = word1.replace(/[^a-zA-Z1-9]/gi,"")
    const indexable = cleaned.split("")
    
    
    let left = 0
    let right = cleaned.length -1

    for (let i = 0; i < indexable.length; i++) {
        if (indexable[left] === indexable[right]){
            left++
            right--
        } else {
            return false
        }
    }
    return true
};

// export {palindrome as palindrome}

// console.log(palindrome('racecar'))