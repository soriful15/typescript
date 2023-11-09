// destructuring


// object
{
    const user={
        id:345,
        name:{
            firstName:'soriful',
            middleName:'islam',
            lastName:'shuvo'
        },
        contactNo:'00000011',
        address:'uganda'
    }

    const {contactNo, name:{middleName }}=user
    // const {contactNo, name:{middleName : midName}}=user


// array
const myFriends=['x','y','z','k','r']
// const[a,b,c]=myFriends
// const[,,c]=myFriends
const[,,c,...d]=myFriends

}