console.log("Before prepare food");

function prepareFood(){
    setTimeout(()=>{
        console.log("Prepare Food");
    },20);
}

prepareFood();

console.log("Meanwhile do something else");