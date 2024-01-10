// import React, { useEffect } from 'react'


// export const Parent = () => {
//     const intro:IChildProps ={
//         name:'Sumit',
//         age: 26,
//         address: 'jaipur'
//     }
//   return (
//     <Child  name/>
//   )
// }


// interface IChildProps {
//     name:String,
//     age:Number,
//     address: String
// }
// export const Child = (IChildProps:props) => {
//     return (
//       <div>{props.name}</div>
//     )
//   }
// const response =[
//     {   id:12,
//         name: 'cycle',
//         price: 2500,
//         photo: 'abc.com',
//         details: {
            
//         }
//     },
//     {
//         name: 'bike',
//         price: 25000,
//         photo: 'abcd.com'
//     },
//     {
//         name: 'teddy',
//         price: 500,
//         photo: 'abcde.com'
//     }
// ]


//   import React from 'react'
  
//   export const HomePage = () => {
//     const [data,setData]=useState<>();
//     useEffect(()=>{
//      fetch("something") 
//     //  save the response of fetch in local state  
        
//     },[]);
//     return (
//       <div>
//       {
//         response.map((item)=>{
//             <ListItem key={" "+item.id}>

//             {item.name}
//             </ListItem>
//         })
//       }
//       </div>
//     )
//   }
  