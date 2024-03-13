// maximum keresés esetébben a tömb bejárás olvashatóbb,
// ha for ciklust használunk
// for ciklust akkor szeretünk használni ha számos sokszor akarunk lefutatni egy kódot
let array = [10, 10, 33, 54, 32, 10, 33, 54, 32, 10, 33,];
let max = array[0];

for (let index = 1; index < array.length; index++) {
    if(max < array[index]){
        max = array[index];
    }
    
}

console.log("A tömb legnagyobb eleme",max);


// a tömb bejárás leírása 3 külnböző helyre kerül while ciklussal
max = array[0];

let index = 1; // 1. kezdő index
while(index < array.length){ // 2. ciklus feltétel
    if(max < array[i]){
        max = array[i];
    }
    index++; // 3. léptetés
}
console.log("A tömb legnagyobb eleme",max);


// szám bekérése amíg nem kapok számot
// mivel nem tudjuk hányszor kell lefutnunk így a ciklus feltétel kell csak nekünk
// nincs alaphelyzet nincs léptetés
let number = NaN;
while(isNaN(number)){
    number = Number(prompt("Addj meg egy számot"));
}

// a for ciklus első és utolsó része üres marad, nem szép vagy olvasható
// működik de szebb while ciklussal
number = NaN;
for(;isNaN(NaN);){
    number = Number(prompt("Addj meg egy számot"));
}