# Logikai értékkel visszatérő metódus
isNan()
```js
   let a = Number("number");
   console.log(a); // NaN
   console.log(isNaN(a)) //true
   console.log(isNaN(2)) //false
```
confirm()  
Ez egy felugró ablak ami logikai értéket add vissza
```js
    const okay = confirm("Nekem adod a veséd?");
    console.log(okay);
```