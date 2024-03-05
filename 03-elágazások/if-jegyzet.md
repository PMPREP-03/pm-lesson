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
let first = true;
let second = false;
// ez mindig lefut
if(first){
    // ez akkor fut le ha a "first" igaz
    if(second){
        // ez akkor fut le ha a "first" és a "second" is igaz
    }
    // ez akkor fut le ha a "first" igaz
}
// ez mindig lefut
if(first && second){
    // ez akkor fut le ha a "first" és a "second" is igaz
}
```
