console.log("Before prepare food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food");
        callback('Food is Ready');
    },10);
}

function prepareToast(callback){
    setTimeout(()=>{
        console.log("Prepare Toast");
        callback('Toast is Ready');
    },20);
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback('Coffee is Ready');
    },30);
}

function Foodcallback(value){
    console.log("Food is Ready callback = ", value);
    prepareToast(Toastcallback);
}

function Toastcallback(value){
    console.log("Toast is Ready callback = ", value);
    prepareCoffee(Coffeecallback);
}

function Coffeecallback(value){
    console.log("Coffee is Ready callback = ", value);
}

prepareFood(Foodcallback);

console.log("Meanwhile do something else");