function enqueue(array,value){
    array.push(value);
}
function dequeue(array){
    array.shift();
}
var array =[1,2,3,4,5];
//add 10 at end
enqueue(array,10);
//remove first element
dequeue(array);
console.log(array);