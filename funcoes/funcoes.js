function getName(){
    return "Marcos Paulo"
}

function logFn(fn){
    console.log(fn())
}

const logFnResult = logFn;

logFnResult(getName);