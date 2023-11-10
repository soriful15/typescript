    //  // learn rest operator
const  greetFriends=(...friends:string[])=>{
    friends.forEach((friend:String)=>console.log(`hi${friend}`))
}

    greetFriends('e', 'f', 'g', 'h');