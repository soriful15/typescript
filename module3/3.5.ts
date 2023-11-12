{

    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount
        }
        public getBalance() {
            return this._balance
        }


    }

// class StudentAccount extends BankAccount{
//     test(){
//         this.
//     }
// }
    const goribManusherAccount = new BankAccount(1, 'mr soriful', 20);
    //  goribManusherAccount.balance = 0;
    //  goribManusherAccount.id = 0;
    goribManusherAccount.addDeposit(200)
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance)

}