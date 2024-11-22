/*14.Create a function that takes a string as an argument and returns a boolean,
true if string is a palindrome else false. A palindrome is a word that reads the same backward as forward.
For example, if the function is called with "hello" it should return false, if the function receives "elle" it should return true,
because elle backwards is also elle.*/
function reverseWord(originalWord) {
    let reversedWord = "";

    for(let i = originalWord.length; i > 0; i--) {
        reversedWord += originalWord[i-1]
    };

    return reversedWord.toLowerCase;
};


function compareWords(word) {
    let reversed = reverseWord(word);

    if(word.toLowerCase === reversed) {
        //alert(`Yes, ${word} is a palindrome`)
        console.log(`Yes, ${word} is a palindrome`);
    } else {
        //alert(`No, ${word} is not palindrome`)
        console.log(`No, ${word} is not palindrome`);
    };
};

//compareWords(prompt("Which word do you wanna check?"));

compareWords("radar")