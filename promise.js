console.log("Before prepare food");

function prepareFood(data){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(data!==2){
                console.log("Prepare Food");
                resolve('Food is Ready');
            }
            else{
                reject("Value not acceptable");
            }
        },10);
    });
    return promise;
}

function prepareToast(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Prepare Toast");
            resolve('Toast is Ready');
        },20);
    });
    return promise;
}

function prepareCoffee(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve('Coffee is Ready');
        },30);
    });
    return promise;
}  

let promise = prepareFood(2);
//console.log("Promise = ",promise);
promise.then((value)=>{
    console.log("Food is Ready promise_then = ", value);
    return prepareToast();
})
.then((value)=>{
    console.log("Toast is Ready promise_then = ", value);
    return prepareCoffee();
})
.then((value)=>{
    console.log("Coffee is Ready promise_then = ", value);
})
.catch((error)=>{
    console.log("Error = ", error);
});
//hierarchy
console.log("Meanwhile do something else");
