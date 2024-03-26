# my-package-math 1.1.0

## Instalation

Using npm:
```shel
$ npm i --save my-package-math
```

In Node.js
```js
const math - require('my-package-math')

let result:

//Soma
result = math.somar(5,3);
console.log(result); //8

//Subtração
result = math.subtrair(5,3);
console.log(result); //2

//Multiplicação
result = math.mutiplicar(5,3);
console.log(result); //15

//Divisão
result = math.dividir(10,2);
console.log(result); //5

//Multiplicação
result = math.mutiplicarPorTres(10);
console.log(result); //30

## Breaking Changes
Add new function "multiplicacaoProTres" and delete function "mutiplicacaoPorDois".