{

  // mapped types

  const arrOfNumbers: number[] = [1, 4, 5];

//   const arrOfStrings : string[] = ['1','4','5'] 

const arrOfStrings:string[]=arrOfNumbers.map((number)=>
   number.toString()
)

// console.log(arrOfStrings)



type AraNumber={
    height: number;
    width: number; 
}
 // type AreaString = {
  //   height: string;
  //   width: string
  // }
// keyof AreaNumber => "height"|"width"

  // T => {height:string;width:number}
  // key => T["width"]

type AraString={
    // [key in "height" | "width" | "depth"]:string
    [key in keyof AraNumber]:string 
}


type AraString2<T>={
    // [key in "height" | "width" | "depth"]:string
    [key in keyof T]:T[key]
}
const area1:AraString2<{ height: number,
    width: number }>={
   height:111,
   width:222
}


}