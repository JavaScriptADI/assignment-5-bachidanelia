//11.Given the following code, find and correct the mistake in the code:
function bar(x) {
    x += 1;
    return x;
};

function foo(x) {
    x = bar(x);
    x *= 2;
    return x;
};

let x = 7;
x = foo(x);
console.log(x); // 16