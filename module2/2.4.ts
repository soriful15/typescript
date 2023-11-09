{

    interface Developer<T,X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?:X
    }

type  EmilabWatch={
    brand: string;
    model: string;
    display: string
}
     
    // const poorDeveloper: Developer<{
    //     brand: string;
    //     model: string;
    //     display: string
    // }> = {
    //     name: 'shuvo',
    //     computer: {
    //         brand: 'Asus',
    //         model: 'X-255UR',
    //         releaseYear: 2013

    //     },
    //     smartWatch: {
    //         brand: 'emilab',
    //         model: 'kw66',
    //         display: 'oled'
    //     }
    // }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'shuvo',
        computer: {
            brand: 'Asus',
            model: 'X-255UR',
            releaseYear: 2013

        },
        smartWatch: {
            brand: 'emilab',
            model: 'kw66',
            display: 'oled'
        }
    }



    interface IWatch{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
interface YamahaBike{
    model:string;
    engineCapacity:string
}
    // const richDeveloper: Developer<{

    //     brand: string;
    //     model: string;
    //     heartTrack: boolean;
    //     sleepTrack: boolean;

    // }> = {
    //     name: 'soriful',
    //     computer: {
    //         brand: 'macbook',
    //         model: 'top level',
    //         releaseYear: 2024

    //     },
    //     smartWatch: {
    //         brand: 'i Watch',
    //         model: 'top level',
    //         heartTrack: true,
    //         sleepTrack: true,
    //     }
    // }

    const richDeveloper: Developer<IWatch,YamahaBike> = {
        name: 'soriful',
        computer: {
            brand: 'macbook',
            model: 'top level',
            releaseYear: 2024

        },
        smartWatch: {
            brand: 'i Watch',
            model: 'top level',
            heartTrack: true,
            sleepTrack: true,
        },
        bike:{
model:'Yamaha',
engineCapacity:'100cc'
        }
    }




}