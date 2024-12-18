const promise = new Promise((resolve, reject)=>{
        const data=[{name:"akash"}]
        const netAv = true;
        if(false){
          resolve(data)
        }else{
          reject("net issue")
        }
})

promise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
})

//Promise
//.all
//if any of the promise fail it will log failed

//.allSettled
//it dosent matter fail or success it will return all the result

//.race
//whether it is failed or success it will return first result

//.any
//it will wait for any 1 of success
//if all fails it will give aggrgator