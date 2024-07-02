//QUESTION # 01

function fetchGreeting(){
     }
     setTimeout(()=>{
         console.log("Wish You a Wonderfull Day Today!");
     },2000)
    console.log(fetchGreeting);


//qUESTION # 02
//Write a function simulateTask that simulates a task by logging "Task started",
//waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask(){
console.log("task started");
}
setTimeout(()=>{
    console.log("Task completed")
},1000);
simulateTask()



// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
 const fetchData=()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetch successfully!")
        },1000);
       });
    };

        fetchData().then((result)=>{
            console.log (result);
        })



// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch


 function fetchWithError(){
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
        resolve("Data fetched successfully!");
    }else{
        reject("Data fetch failed!");
   }
}, 1000);
   }); 
}
fetchWithError().then((response) => {
    console.log(response);
}).catch((rejection) => {
    console.log(rejection);
});
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

 let fetchData = new Promise((resolve,reject)=>{
resolve("data fetched");
})
let processData = new Promise ((resolve,reject)=>{
    resolve("Processed Data");
})
async function executeSequentially() {
    let fetch = await fetchData;
    let process= await processData;
    console.log(fetch);
    console.log(processData);
};
executeSequentially()