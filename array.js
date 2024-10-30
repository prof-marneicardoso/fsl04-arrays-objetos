
// Matrizes e Vetores em JavaScript

// Criar Array (Matriz)
const frutas = [];
console.log(frutas);

// Adiciona elemento (no final do array)
frutas.push('banana');
frutas.push('macã');
frutas.push('laranja');
frutas.push('uva');
frutas.push('abacaxi');
console.log(frutas);

// Remove elemento (do final do array)
frutas.pop();
console.log(frutas);

// Remove um elemento específico
frutas[1] = null;
console.log(frutas);
console.log('Quantidade de elementos no array: ', frutas.length); // quantidade de elementos

// Adiciona elemento (no inicio do array)
frutas.unshift('melancia');
console.log(frutas);
console.log('Quantidade de elementos no array: ', frutas.length);

// Remove elemento (do inicio do array)
frutas.shift();
console.log(frutas);
console.log('Quantidade de elementos no array: ', frutas.length);

frutas[1] = 7;

// Slice (fatiar)
frutas.slice(0, 1);
console.log(frutas);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("\nAnimals: ", animals.slice(0, 3));


// Splice (remover e adicionar)
const meses = ['Jan', 'March', 'April', 'June'];
meses.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(meses);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

//          posição     quantidade  (novo elemento)
frutas.splice(1,        1,          'abacaxi');
console.log(frutas);


// meses.splice(4, 1, 'May');
// Replaces 1 element at index 4
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Para rodar o código no Terminal
// Ctrl + J (abre o Terminal)
// node array.js



//                  0       1       2
const frutas2 = ['banana', 'macã', 'laranja'];

// [] == colchetes
// () == parenteses
// {} == chaves

// ✅ Array
// ✅ Objetos
// ✅ JSON



// Objetos em JavaScript

// Os objetos são identicados por Key e Value (Chave: Valor)
const listaCarros = [];

const carro = {
    // Key:     Value
    id:         1,
    montadora:  'Honda',
    modelo:     'Civic',
    ano:        2021,
    cor:        'preta',
    cambio:     'manual'
};

// Adiciona o objeto no array
listaCarros.push(carro);
// console.log(listaCarros);

const carro2 = {
    // Key:     Value
    id:         2,
    montadora:  'Ford',
    modelo:     'Mustang',
    ano:        1967,
    cor:        'azul',
    cambio:     'manual'
};

listaCarros.push(carro2);
console.log(listaCarros);

// console.log(`Modelo: ${listaCarros[0].modelo}\nAno: ${listaCarros[0].ano}`);

// Arrow Function (Expressão de função anonima)
listaCarros.forEach((carro) => console.log(carro.modelo));

// Function Anônima
listaCarros.forEach(function(carro) {
    console.log(carro.montadora);
});

// Function Nomeada
function imprimirModelo(carro) {
    console.log(carro.cor);
}

// precisa ser chamada pelo nome
imprimirModelo(listaCarros[1]);


// Altera o valor de um objeto (dentro de um array)
listaCarros[0].cambio = 'automatico';
console.log(listaCarros);

// JSON (JavaScript Object Notation)
[
    {
        id:         1,
        montadora:  'Honda',
        modelo:     'Civic',
        ano:        2021,
        cor:        'preta',
        cambio:     'manual'
    },
    {
        id:         2,
        montadora:  'Ford',
        modelo:     'Mustang',
        ano:        1967,
        cor:        'azul',
        cambio:     'manual',
        fotos: [
            './img/foto1.png',
            './img/foto2.png',
            './img/foto3.png'
        ]
    }
]



/*
 - ✅ Postman, Insomnia, Thunder Client
 - ❌ (FALTOU) Converter dados do Excel para JSON (Excel -> JSON)
*/
