// const test = (method) =>{
//     console.log("inside test");
//     return demo = (url) =>{
//         console.log("inside demo");
//       console.log(`method ${method} and url ${url}`);
//     } 
// }
// const url = "www.example.com"
// const result = test("get")
// result(url)

//---------------------------------------------------------

//  function counterWrapper () {
//     let count = 0;
//      return function() {
//           count++;
//           console.log(count);
//      }  
// }

// const update = counterWrapper();

// update();
// update();
// update();

//--------------------------------------
// const shoppingCart=()=>{
//     let count = 0;
//     const changeCount = (value) =>{
//         count = value;
//     }
//     return {
//         add:(v)=>{
//             changeCount(count +v)
//         },
//         remove:(v)=>{
//             changeCount(count -v)
//         },
//         cart:()=>{
//             return count;
//         }
//     }
// }
// const res = shoppingCart()
// res.add(1)
// res.add(1)
// res.add(1)
// res.remove(2)
// console.log(res.cart());
//------------------------------------------------
const useState = (initialState) => {
      let state =initialState;

      const setState = (v) =>{
         state = v;
      }
      const getState=()=>{
           return state;
      }
      return [getState,setState];
}

const counter = () =>{
    const [count,setCount] = useState(0);
    return{
        click(){
          setCount(5);
        },
        render(){
           console.log(`value :${count()}`);
        }
    }
}
const res = counter();
res.click();
res.render();
