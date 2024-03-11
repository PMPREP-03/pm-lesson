let array = [10, 10, 33, 54, 32];
let search = 20;
// döntsük el hogy a search értékét tartalmaza e az array

let isFounded = false;

let index = 0;
while(index < array.length && !isFounded){
    if(search == array[index]){
        isFounded = true;
    }
    index++;
}
if(isFounded){
    console.log("benne van")
}else{
    console.log("benne van")
}