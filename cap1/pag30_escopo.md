# Capítulo 1

## Escopo

```js
var MyVar = 'global';
MyOtherVar = 'global';

function teste1(){
    var MyVar = 'local';
    return MyVar;
}

function teste2(){
    MyOtherVar = 'local';
    return MyOtherVar;
}

console.log(MyVar);
console.log(teste1());

console.log(MyOtherVar);
console.log(teste2());
console.log(MyOtherVar);
```