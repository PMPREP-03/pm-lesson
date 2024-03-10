## Whille
A programunk egy adott része ami ismétlődik,  
egészen addig míg a ciklusfeltétel igaz azaz true.
```js
while(true){
    // ez egy végtelen ciklus mivel a feltétel mindig true lesz
}

let counter = 0;
while(counter < 3){
    counter = counter + 1;
}
```
Egy tömb bejárása while ciklussal
```js
let array = [1,2,3,1,2,3,1,2,3];

// mivel a tömb első elemme a 0. indexen van így 0 tól kezdünk
// és addig megyünk amíg az index kisebb mint a tömb hossza
// így az nindex változó felveszi az összes elem indexét 1x
let index = 0;
while(index < array.length){
    console.log(array[index]);
    index = index + 1;
}
```
Input helyeségének elenőrzése majd újra kérése amíg nem helyes
```js
let input = NaN;
// igazá teszem a ciklus feltételét hogy biztos belépjen
while(isNaN(input) || input < 0){
    // addig kérek új inputot amíg megfelelőt nem kaptam
    input = Number(prompt("Adj meg egy pozitív számot"));

    if(isNaN(input)){
        alert("Ez nem szám");
    }
    if(input < 0){
        alert("Ez nem pozitív szám");
    }
}
```
Tömb elemeinek összegzése
```js
let array = [10,10,12,34,5432,234,234,12,0,342,543,-654,234,3242,-9764];

// az eddig megszámolt összeg 0
let sum = 0;
// végig iterálok a tömbön
let index = 0;
while(index < array.length){
    // az aktuális elemet hozzá adom az összeghez
    sum = sum + array[index];
    // lépek a következő elemre
    index = index + 1;
}
// és itt már a sum változóm az összeg
```
