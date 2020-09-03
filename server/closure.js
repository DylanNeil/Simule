function test() {
    console.log('test');
    let x = 1;

    function test2() {
        console.log('test2');
        x += 1;
        console.log('Inside closure:', x);
    }

    console.log('Outside closure:', x);
    return test2;
}

const test2 = test();
test2();
test2();
test2();
test2();
test2();
test2();
console.log(test.x);
