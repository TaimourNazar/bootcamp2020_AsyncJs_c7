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

async function startProcess(){
    try{
        let foodValue = await prepareFood(2);
        console.log("Food: ", foodValue);
        let toastValue = await prepareToast();
        console.log("Toast: ", toastValue);
        let coffeeValue = await prepareCoffee();
        console.log("Coffee: ", coffeeValue);
    }
    catch(error){
        console.log("Error in catch = ", error);
    }
}

startProcess();

console.log("Meanwhile do something else");
