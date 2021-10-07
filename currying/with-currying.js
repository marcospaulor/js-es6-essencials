function soma(a){
    return function (b){
        return a + b;
    }
}

const soma2 = soma(2);

soma2(2); // 4
soma2(3); // 5
soma2(4); // 6
soma2(5); // 7