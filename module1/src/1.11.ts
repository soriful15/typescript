{

// ternary operator || optional chaining || nullish Coalescing

const age: number=18
if(age>=18){
    console.log("not adult")
}
else{
    console.log("adult")
}

// ternary operator

const isAdult = age>= 18 ? 'adult' :'not adult'
console.log({isAdult})


// nullish Coalescing

// null / undefined ---> decision making

const isAuthenticated=null
const result= isAuthenticated ?? 'guest'
console.log({result})
const result1= isAuthenticated ? isAuthenticated : 'guest'
console.log({result1})


// optional chaining
type User={
    name: string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress?:string
    }
}

const user:User={
    name:'x',
    address:{
        city:'dhaka',
        road:'donai',
        presentAddress:'dhaka'
    }
}

// const permanentAddress= user?.address?.permanentAddress
// console.log(permanentAddress)
const permanentAddress= user?.address?.permanentAddress ?? 'not found address'
console.log({permanentAddress})

}