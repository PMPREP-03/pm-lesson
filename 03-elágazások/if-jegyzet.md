## If
```js
let a = true;
if(a){
    // a () között van az if "feltétele" 
    // amit ide írok csak akkor fut le ha a feltétel igaz
    // ami a {} között van az az if "belseje"
    // ebben a példában az itt lévő kódok lefutnak
}
if(false){
    // ebben a példában az itt lévő kódok nem futnak le
}
```
```js
let first = true; // vagy false
let second = false; // vagy true
// ez mindig lefut
if(first){
    // ez akkor fut le ha a "first" igaz
    if(second){
        // ez akkor fut le ha a "first" és a "second" is igaz
        //  a belső if-be lépésnek a feltétele hogy a külsőbe is belépjen
    }
    // ez akkor fut le ha a "first" igaz
}
// ez mindig lefut
if(first && second){
    // ez akkor fut le ha a "first" és a "second" is igaz
}
```
