/*4.Create a function that takes a string as an argument and greets the user.
For example, if the function is called with "John," the function should return "Hello, John!"*/
function greetings(nickname) {
    console.log(`Hello ${nickname}`)
};

greetings("Bob");

/*5.Create a function that takes a string as an argument and returns a string with the argument value in reverse.
For example, if the function is called with the input "hello," the function should return "olleh."
(Use a loop, not a method that does this in one step.)*/
function reversingString(originalWord) {
    let reversedWord = "";

    for(let i = originalWord.length; i > 0; i--) {
        reversedWord += originalWord[i-1]
    };

    console.log(reversedWord);
};

reversingString("hello");

//7.What is the scope and lifetime of a variable?
function scopes() {
    const noConflict = "under a scope" //<<-- exists only here and not accessible from outside.
    console.log(noConflict);
};
scopes();

const noConflict = "still no conflict"; //<<-- is accessible globaly and exists while application is running.
console.log(noConflict);

//8.What is a return value?
function sum(a, b) {
    return a + b; //<<-- function is stopped and value returned.
};

console.log(sum(2, 4));

//9.What is the return value of a function that does not have a return statement?
function withoutReturn() {
    let weather = "sunny"
};

console.log(withoutReturn()); // undefined

//10.Given the following function, find mistakes in the code and explain what the function is supposed to do:
function foo(x) {
    return x * 2; //<<-- it was missing return and therefor was undefined.
};

let x = 7;
x = foo(x);
console.log(x); // 14; returns number multiplied by 2.
