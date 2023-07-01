setTimeout(()=>{
    console.log(1);
},0)

const promise = new Promise((resolve,reject)=>{
     
     setTimeout(()=>{
        resolve(2);
    },5000)
})
promise.then((data)=>{console.log(data);})

console.log(3);

//event loop has 2 choices 1 is task queue 2 is micro task queue
// setTimeout funciton goes in task queue
// promise goes in micro task queue
// event loop give priority to micro task queue promise (.then callback)