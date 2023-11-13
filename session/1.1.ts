{
    let fruits: Array<number> = [1, 2, 3]


    let ageName: [number, string, boolean] = [12, 'Mr.x', true]
    ageName[1] = 'Mr.'
    // console.log(ageName)

    let ageName2: [number, string] = [12, 'x']
    // console.log(ageName2[0]=2)

    let numbers: number[] = [1, 2, 3];
    numbers.push(15)
    // console.log(numbers)

    const user1: {
        readonly firstName: string;
        middleName?: string;
        lastName: string;
    } = {
        firstName: 'sss',
        // middleName:'soriful',
        lastName: 'islam'
    }
    // user1.firstName='xx'
    user1.lastName = 'xx'


    const poorUser = {
        name: 'Mezba',
        balance: 0,
        addBalance(number1: number): number {
            return this.balance + number1
        }
    }
    const poorUser2 = {
        name: 'Mezba',
        balance: 0,
        addBalance(number1: number): string {
            return `${this.balance + number1}`
        }
    }

    const array: number[] = [1, 2, 3, 4]
    // const arrayMap=array.map((ele:number):number=>ele*ele)
    const arrayMap: number[] = array.map((ele: number): number => ele * ele)

    //  // learn rest operator
    // const friendZone = (...freinds: string[]) => {
    //     freinds.forEach((element: string) => console.log(`hi ${element}`));
    // }
    // greetFriends('e', 'f', 'g', 'h');





    const user = {
        id: 345,
        name: {
            firstName: 'soriful',
            middleName: 'islam',
            lastName: 'shuvo'
        },
        contactNo: '00000011',
        address: 'uganda'
    }

    const { id, name: { middleName } } = user
    // console.log(user)


    const myFriends = ['x', 'y', 'z', 'k', 'r']
    // const [a,b,c]=myFriends
    const [, , c, ...d] = myFriends


    type Number = (num1: number, num2: number) => number
    const add: Number = (num1, num2) => num1 + num2


    type User22 = {
        name: string;
        blood: 'a' | 'o'
    }
    const rs: User22 = {
        name: 'sr',
        blood: 'o'
    }

    type FrontEndDeveloper2 = {
        skills: number[];
        designation1: 'Frontend Developer',
    }

    type BackendDeveloper = {
        skills: number[]
        designation2: 'Backend Developer',
    }

    type developer = FrontEndDeveloper2 & BackendDeveloper

    const web: developer = {
        skills: [1, 2],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
    const age: number = 18
    if (age >= 18) {
        console.log('adult')
    }
    else {
        console.log('not')
    }

    const adult2 = age >= 18 ? true : false

    const isAuthenticated = null
    // const isAuthenticated='ok'
    const result = isAuthenticated ?? 'guest'
    // console.log(result)

    const result2 = isAuthenticated ? isAuthenticated : 'guest'
    // console.log(result2)



    // optional chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const person: User = {
        name: 'x',
        address: {
            city: 'dhaka',
            road: 'donai',
            presentAddress: 'dhaka'
        }
    }

    // console.log(person?.address?.permanentAddress?? 'not found')


    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 36000
            console.log(`this speed is ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 36000
            console.log(`this speed is ${convertedSpeed}kmh^-1`)
        }
        else {

        }
    }
    // getSpeedInMeterPerSecond('1000 kmh^-1')

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return ` this conversion value is: ${convertedValue}`
        }
        if (typeof value === 'number') {
            return value

        }
    }
const result11=kgToGm('22') as string


type Error={
    message:string
}

try{

}catch(error){
    // console.log((error as Error).message)
}
type user1={
    name:string;
    age: number;
   
}
type UserWidth=user1 & {roll:number}
const user11:UserWidth={
    name:'x',
    age:22,
    roll: 22

}

interface user111{
    name:string;
    age: number;
   
}
interface UserWidth2 extends  user111 {roll:number}
const user111:UserWidth2={
    name:'x',
    age:22,
    roll: 22

}
interface roll2{
    [index:number]:number
}
const rollNumber2: roll2=[3,1,2]


interface Add{
    (num1:number,num2:number):number
}

type GenericArrayGo<T>=Array<T>

type GenericArray=Array<number>
// const rollNumbers: number[]=[3,6,8]
// const rollNumbers: Array<number>=[3,6,8]
const rollNumbers:GenericArray=[3,6,8]
const rollNumbers2:GenericArrayGo<number>=[3,6,8]


type User222={
    name:string;
    age:number;
}
const allUser:GenericArrayGo<User222>=[

    {
        name:'xx',
        age:22
    },
    {
        name:'xx',
        age:22
    },
    {
        name:'xx',
        age:22
    },
]
type GenericTuple<T,X>=[T,X]

const rollNumberss:GenericTuple<number,string> =[3,'6',]

const roll1123:GenericTuple<number,{name:string; roll:number}>=[22,{name:'ss',roll:22}]


interface WebDeveloper<T,X=null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    },
    smartWatch: T;
    bike?:X
}

type XX={
    smartWatch:string,
    brand:string;
    relase:number
}
interface YamahaBike{
    model:string;
    engineCapacity:string
}
const poorDeveloper:WebDeveloper<XX,YamahaBike>={
    name: 'shuvo',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013

        },
        smartWatch:{

            smartWatch:'emm',
            brand:'mack',
            relase:2222
        },
        bike:{
            model:'Yamaha',
            engineCapacity:'100cc'
                    }
}


const creatArray=(param:string):string[]=>{
    return [param]
}
const res1 = creatArray('bangladesh')


const creatArray2=<T>(param:T):T[]=>{
    return[param]
}
const res2 = creatArray2('bangladesh')
type TT={
    name:string,
    roll:number
}
const res3 = creatArray2<TT>({name:'xx',roll:22})


const createArrayWithTuple=<X,Y>(pram1:X,param2:Y):[X,Y]=>{
    return[pram1,param2]
}

const result12=createArrayWithTuple<string,number>('xx',22)
const result123=createArrayWithTuple<string,{name:string,roll:number}>('xx',{name:'ss',roll:23})




const addCourseToStudent=<T>(student:T)=>{
    const course='next level web development'
    return{
        course,
        ...student
    }
}
const allStudent=addCourseToStudent<{name:string,roll:number}>({name:'ss',roll:23})

const addCourseToStudent2=<T extends {name:string,roll:number}>(student:T)=>{
    const course='next level web development'
    return{
        course,
        ...student
    }
}
const allStudent2=addCourseToStudent2<{name:string,roll:number,session:string}>({name:'ss',roll:23,session:'yy'})




type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner=keyof Vehicle
  const owner1:Owner='bike'

const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key]
}
const user2={
    name:'mr x',
    age:26,
    address:'ctg'
  }
const get=getPropertyValue(user2,'age')


type a1=null

type b1=undefined
type aa= a1 extends null? true: false 
type aa2=a1 extends null? true : b1 extends undefined? undefined : false
type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckValue<T>= T extends keyof Sheikh? true: false
type ok=CheckValue<'ship'>


const arrOfNumbers: number[] = [1, 4, 5];
const arrOf:string[]=arrOfNumbers.map(number=>number.toString())

type AraNumber={
    height: number;
    width: number; 
}
type aranumber={
    [key in keyof AraNumber]:string
}

type aranumber2<T>={
    [key in keyof T]:T[key]
}

const area1:aranumber2<{ height: string;
    width: number;}>={
    height: 'ss',
    width: 22,
}





}