console.log("first");
console.log("Second")


const  demo =async()=>{
    const response = await fetch("https://fakestoreapi.com/products/1");
    console.log(111,response);

    const data= await response.json();
    console.log(111,data);
}

// demo();

const myFn=(value)=>{
    console.log(value)
}
const sum=(a,b,y)=>{
    const x= a+b;
    y(x)
}

sum(1,9,myFn);