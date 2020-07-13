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

prepareFood((value)=>{
    console.log("Food is Ready callback = ", value);
    prepareToast((value)=>{
        console.log("Toast is Ready callback = ", value);
        prepareCoffee((value)=>{
            console.log("Coffee is Ready callback = ", value);
        });
    });
});

console.log("Meanwhile do something else");