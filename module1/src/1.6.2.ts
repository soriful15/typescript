{

    function add(num: number, num2: number = 10): number {
        return num + num2
    }

    const result = add(1, 3)

    const arrow = (num12: number, num11: number): number => num12 + num11

    const array: number[] = [1, 2, 3, 4]
    const map: number[] = array.map((ele: number): number => ele * ele)

    const poorUser = {
        name: 'x',
        balance: 12,
        // addBalance(balance: number): number {
        addBalance(balance: number): string {
            // return this.balance + balance
            return `this is number: ${this.balance + balance}`
        }
    }


}