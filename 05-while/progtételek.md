# Összegzés tétele
```js
    let array = [10, 10, 30, 54, 32];
    // addjuk össze a tömb elemeit egy új változóban
    // 10 + 10 + 30 + 54 + 32 -> 136
    let sum = 0;

    let index = 0;
    while (index < array.length) {
        sum = sum + array[index];
        index++;
    }

    console.log("A tömb elemeinek összege:", sum);
```
# Megszámlálás
```js
    let array = [10, 10, 33, 54, 32];
    // számoljuk meg hány páros eleme van a tömbnek
    // [10, 10, 33, 54, 32] -> 4
    let count = 0;
    
    let index = 0;
    while(index < array.length){
        if(array[index] % 2 == 0){
            count += 1;
        }
        index++;
    }
    console.log("Ennyi páros szám van",count);
```
# Maximum kiválasztás
```js
    let array = [10, 10, 33, 54, 32];
    // keresük meg a tömb legnagyobb elemét
    let max = array[0];

    let index = 1;
    while(index < array.length){
        if(max < array[i]){
            max = array[i];
        }
        index++;
    }
    console.log("A tömb legnagyobb eleme",max);
```
```js
    let array = [10, 10, 33, 54, 32];
    // keresük meg a tömb legnagyobb elémnek az indexét
    let maxIndex = 0;

    let index = 1;
    while(index < array.length){
        if(array[maxIndex] < array[index]){
            maxIndex = index;
        }
        index++;
    }
    console.log("A tömb legnagyobb elemének az indexe",maxIndex);
```
# Minimum kiválasztás
```js
    let array = [10, 10, 33, 54, 32];
    // keresük meg a tömb legkisebb elemét
    let min = array[0];

    let index = 1;
    while (index < array.length) {
        if (min > array[index]) {
            min = array[index];
        }
        index++;
    }
    console.log("A tömb legkisebb eleme", min);
```
```js
let array = [10, 10, 33, 54, 32];
// keresük meg a tömb legkisebb elemének indexét
let minIndex = 0; 

let index = 1;
while(index < array.length){
    if(array[minIndex] > array[index]){
        minIndex = index;
    }
    index++;
}
console.log("A tömb legkisebb elemének indexe", minIndex);
```