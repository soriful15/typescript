// nullable Types

{
    // 1.
    const searchName = (value: string) => {
        if (value) {
            console.log('searching')
        }
        else {
            console.log('there is noting to search')
        }
    }
    searchName('soriful')


    // 2.
    const searchName1 = (value: string | null) => {
        if (value) {
            console.log('searching')
        }
        else {
            console.log('there is noting to search')
        }
    }
    searchName1(null)


    // unknown type
    // 1
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 36000
            console.log(`this speed is ${convertedSpeed} ms^-1`)
        }
    }
    getSpeedInMeterPerSecond(10000)

    // 2.
    const getSpeedInMeterPerSecond2 = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 36000
            console.log(`this speed is ${convertedSpeed} ms^-1`)
        }
        if (typeof value === 'string') {
            // const valueNumber= value.split(' ')
            const [result, unit] = value.split(' ')

            const convertedSpeed = (parseFloat(result) * 1000) / 35000
            console.log(`this speed is ${convertedSpeed}kmh^-1`)
        }
    }
    getSpeedInMeterPerSecond2('1000 kmh^-1')

    // 3.
    const getSpeedInMeterPerSecond3 = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 36000
            console.log(`this speed is ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string') {
            // const valueNumber= value.split(' ')
            const [result, unit] = value.split(' ')

            const convertedSpeed = (parseFloat(result) * 1000) / 35000
            console.log(`this speed is ${convertedSpeed}kmh^-1`)
        }
        else {
            console.log('there is no value')
        }
    }
    getSpeedInMeterPerSecond3(null)



    // never
    // const throwError = (msg: string):never => {
    //     throw new Error(msg)
    // }
    // throwError('mushkill se error hogaya');





















}