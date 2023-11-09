{
// type assertion
let anything:any;
anything="next level web development";
anything=2222;
// anything=true
// (anything as string).
// (anything as number).


 const kgToGm=(value:string | number): string | number | undefined=>{
    if( typeof value ==='string'){
        const convertedValue=parseFloat(value)*1000
        return ` this conversion value is: ${convertedValue}`
    }
    if(typeof value ==='number'){
        return value
    }
 }
 const result=kgToGm(1000) as number
 const result2=kgToGm(1000) as string

type errorMessage={
    message:string
}

 try{

 }catch(error){
    console.log((error as errorMessage).message)
 }


}