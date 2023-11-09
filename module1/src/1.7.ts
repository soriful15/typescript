
{
    // spread operator
    // rest operator
    // destructuring



    // learn spread operator
    // array
    const bros1: string[] = ['x', 'y', 'z']
    const bros2: string[] = ['a', 'b', 'c']
    bros1.push(...bros2)

    // object
    const mentors1 = {
        typescript: 'x',
        redux: 'y',
        dbms: 'z'
    }
    const mentors2 = {
        prisma: 'a',
        next: 'b',
        cloud: 'c'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }




    //  // learn rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }
    greetFriends('e', 'f', 'g', 'h');

}