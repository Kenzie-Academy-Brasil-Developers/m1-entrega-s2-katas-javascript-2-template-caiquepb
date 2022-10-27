function add(x, y){
    return x+y
}

console.log(add(2,4))

function multiply(x, y){
    let resultado = 0
    for(let i = 0; i < y; i++){
        resultado = add(resultado, x)
    }
    return resultado
}

console.log(multiply(6,8))

function power(x, y){
let resultado = 1
    for(let i = 0; i < y; i++){
        resultado = multiply(resultado, x)
    }
    return resultado
}

console.log(power(2,8))

function factorial(x){
    let resultado = 1
    for(let i = 1; i <= x; i++){
       resultado = multiply(resultado, i)
    }
    return resultado
}

console.log(factorial(4))