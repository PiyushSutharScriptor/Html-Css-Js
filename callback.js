const fun1 = function(callback,n){
    console.log("first")
    console.log(n)
    callback();
}
function cb(){
    console.log("second")
}
fun1(cb,5)
