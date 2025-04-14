// **var**
var nome = "Joâo";
console.log(nome); // "João"

//---1--------
nome = "Alexandre Minhoto";
console.log(nome); // "Maria"

//------2--------
let nova= 17;
console.log(nova);


//------3--------
const teste= 1234;
//teste=123; //da erro

//--------4--------
var array= ["um", 1, 1.1];
console.log(array[0] + " - " + array[1] + " - " + array[2]);

//-----5--------
var equipa= {
    guarda_redes: "Rui Silva",
    numero: 1,
    salario:200.5
};

console.log(equipa.guarda_redes + " - " + equipa.numero + " ->" + equipa.salario + "€");



// **let**
let idade = 20;
console.log(idade); // 20

idade = 21;
console.log(idade); // 21

// **const**
const PI = 3.14;
console.log(PI); // 3.14

// **Tipos de Dados**

// String
let frase = "Olá, mundo!";
console.log(typeof frase); // "string"

// Number
let numero = 10;
console.log(typeof numero); // "number"

// Boolean
let verdadeiro = true;
console.log(typeof verdadeiro); // "boolean"

// Array
let lista = ["banana", "maçã", "laranja"];
console.log(typeof lista); // "object"

// Object
let pessoa = { nome: "João", idade: 20 };
console.log(typeof pessoa); // "object"

// null
let nulo = null;
console.log(typeof nulo); // "object"

// undefined
let indefinido;
console.log(typeof indefinido); // "undefined"




