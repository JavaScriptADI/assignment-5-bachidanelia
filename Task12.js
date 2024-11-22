//Given the following function, what is the return value of the function call foo(2)? Explain your answer.
function foo(x) {
    if (x > 5) {
        return x;
    } else {
        return x + foo(x + 1);
    };
};

console.log(foo(2)); // answer is 20 because it loops itself 5 times and add 1 on every loop, untill x is 6 (2+3+4+5+6 = 20).