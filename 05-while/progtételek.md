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
```js
let array = [10, 10, 30, 54, 32];
// addjuk össze a tömb elemeit egy új változóban
// 10 + 10 + 30 + 54 + 32 -> 136
let sum = 0;

for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
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
```js
let array = [10, 10, 33, 54, 32];
// számoljuk meg hány 20 nál nagyobb eleme van a tömbnek
// [10, 10, 33, 54, 32] -> 3

let count = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] > 20){
        count++;
    }
}

console.log(count);
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
# Másolás
```js
let array = [10, 10, 33, 54, 32];
let copyArray = [];
// az array és a copyArray ugyanazokat ugyanott és ugyanannyi elemet tartalmazon
// de ne ugyanoda mutassanak a memóriában

let index = 0;
while(index < array.length){
    copyArray.push(array[index]);
    console.log("elem hozáadva");
    index++;
}

console.log(array);
console.log(copyArray);
```
# Kiválogatás
```js
let array = [10, 10, 33, 54, 32];
let copyArray = [];
// a copyArray tartalmaza az array páros elemeit (ha 3 ugyanolyan páros szám van akkor 3x)
// [10, 10, 33, 54, 32] -> [10, 10, 54, 32]

let index = 0;
while(index < array.length){
    if(array[index] % 2 == 0){
        copyArray.push(array[index]);
    }
    index++;
}
```
# Szétválogatás
```js
let array = [10, 10, 33, 54, 32];
let evenArray = [];
let oddArray = [];
// a evenArray tartalmaza az array páros elemeit (ha 3 ugyanolyan páros szám van akkor 3x)
// a oddArray tartalmaza az array nem páros elemeit
// [10, 10, 33, 54, 32] -> [10, 10, 54, 32] ; [33]

let index = 0;
while(index < array.length){
    if(array[index] % 2 == 0){
        evenArray.push(array[index]);
    }else{
        oddArray.push(array[index]);
    }
    index++;
}

console.log("Páros:", evenArray);
console.log("Páratlan:", oddArray);
console.log("Összes:", array);
```