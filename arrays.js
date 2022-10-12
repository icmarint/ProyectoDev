let fruta = 'manzana';

let frutas = ['manzana', 'pera', 'auyama', 'kiwi']

function lavar(fruta){
    return fruta + ' lavada'
}

function picar(fruta){
    return fruta + ' picada'
}

const frutaPicada = frutas
    .filter(function(fruta){
        return fruta.slice(-1) !== 'i'
    })
    .map(lavar)
    .map(picar)
    .join(', ')
console.log(frutaPicada)

