{


    {

        class BankAccount {
            public readonly id: number;
            public name: string;
            // private _Balance: number;
            protected _Balance: number;

            constructor(id: number, name: string, Balance: number) {
                this.id = id;
                this.name = name;
                this._Balance = Balance
            }
            // setter
            set deposit(amount: number) {
                this._Balance = this._Balance + amount
            }
            // public addDeposit(amount: number) {
            //     this._Balance = this._Balance + amount
            // }

            // getter
            get balance() {
                return this._Balance
            }
            // public get_Balance() {
            //     return this._Balance
            // }


        }
        const goribManusherAccount = new BankAccount(1, 'mr soriful', 20);

        // goribManusherAccount.addDeposit(200) // function call korte hocche
        goribManusherAccount.deposit = 20
        const my_Balance = goribManusherAccount.balance; // function call korte hocche
        console.log(my_Balance)

    }


}