function checkPalindrome(word) {
    // First, we need to reverse the word
    const reversedWord = word.split('').reverse().join('');

    // Then, we check if the reversed word is the same as the original word
    if (reversedWord === word) {
        console.log('The word is a palindrome');
    } else {
        console.log('The word is not a palindrome');
    }
}

// Example usage:
checkPalindrome('wow'); // Output: "The word is a palindrome"
checkPalindrome('hello'); // Output: "The word is not a palindrome"