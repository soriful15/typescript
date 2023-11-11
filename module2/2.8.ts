{
    

//promise
    //  // simulate
    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolve, reject)=> {
        const data: string = 'something';
        if (data) {
            resolve(data)
        }
        else{
            reject('faild to load data')
        }
    })
}

// calling create promise function
const showData= async() : Promise<string> =>{
    const data:string= await createPromise()
    return data
}
showData()







 //  // simulate
 type something={something:string}
 const createPromise1 = ():Promise<something> => {
    return new Promise<something>((resolve, reject)=> {
    const data: something = {something:'something'};
    if (data) {
        resolve(data)
    }
    else{
        reject('faild to load data')
    }
})
}
// calling create promise function
const showData2= async() : Promise<something> =>{
const data:something= await createPromise1()
return data
}
showData2()





// promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    };



const getTodo=async():Promise<Todo>=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data=await response.json();
    return data
    // console.log(data)
}
getTodo()


}
