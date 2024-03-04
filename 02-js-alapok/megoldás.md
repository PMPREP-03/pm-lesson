# 1. köszöntés
```js
let name = prompt("Mi a neved?");
console.log("helló", name);
```
# 2. plusz egy
```js
let number = Number(prompt("Mi a neved?"));
console.log(number + 1);
```
# 3. hány szelet kenyér kell?
```js
let countOfPerson = Number(prompt("Hányan jönnek?"));
let breadPerPerson = Number(prompt("Mennyire éhesek?"));
let sumBread = countOfPerson * breadPerPerson;
console.log("Ennyi kenyér kell:", breadPerPerson * countOfPerson);
```
# 4. bmi kalkulátor
```js
let heigh = Number(promt("Mi a magaságod (cm)"));
let weight = Number(promt("Mi a súlyod (kg)"));
console.log("A BMI-d:", weight / ((heigh / 100) ** 2));
```
# 5. mérföld-kilométer konvertáló
```js
let mile = Number(prompt("Hány mérföld"));
console.log(mile * 1.61, "km");
```
# 6. celsius-fahrenheit konvertáló
```js
let fahrenheit = Number(prompt("Adj meg fokot F -ben"));
console.log((fahrenheit -32) / 1.8, "C");
```
# 7. változók cseréje
```js
let first = prompt("Egy dolog"); // alma
let other = prompt("Másik dolog"); // körte

let tmp;
tmp = first; // tmp -> alma , first -> alma, other -> körte
first = other; // tmp -> alma , first -> körte, other -> körte
other = tmp // tmp -> alma , first -> körte, other -> alma

console.log(first) // körte
console.log(other) // alma
```
# 8. átutalás
```js
// Kérd be, hogy mennyi pénz van Alice és Bob számláján!
// Írj programot, ami modellezi, hogy Alice pénzt küld Bobnak!
// Az utalandó összeget a felhasználótól kérd be!
let aliceMoney = Number(prompt("Mennyi pénze van Alice-nak?"));
let bobMoney = Number(prompt("Mennyi pénze van Bob-nak?"));
let transferMoney = Number(prompt("Mennyit utal Alice Bob-nak?"));

bobMoney = bobMoney + transferMoney;
aliceMoney = aliceMoney - transferMoney;

console.log("Alice új egyenleg:", aliceMoney);
console.log("Bob új egyenleg:", bobMoney);
```