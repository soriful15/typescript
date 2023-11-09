// Learning function
//  Normal function
// Arrow Function


// normal function
// 1.
function add(num1:number,num2:number){
    return num1+num2
}
// add(1,true) // error kintu dekhabe karon type to number diya
// add(1,'2') // error kintu dekhabe karon type to number diya
add(2,2)

// 2.
function add2(num1:number,num2:number=10){
    return num1+num2
}
// add(1,'2') // error kintu dekhabe karon type to number diya
// add2(1,'2')




// arrow function
const addArrow=(num3:number,num4:number):number=>num3+num4



// object -->function -->method

const poorUser={
    name:'Mezba',
    balance:0,
    addBalance(balance:number):number{
        return this.balance+balance
    }
}

const poorUser2={
    name:'Mezba',
    balance:0,
    addBalance(balance:number):string{
        return `My new Balance is: ${this.balance+balance}`
    }
}



const array:number[]=[1,2,3,4]
const newArray=array.map((ele:number):number=>ele*ele)


// or ai vabe likhete pari nicher ta
const array2:number[]=[1,2,3,4]
const newArray2:number[]=array2.map((ele:number):number=>ele*ele)
