export class Login{
    constructor(
        public email: string,
        public password: string,
    ) { }
}
export class UserInfo{
    constructor(
        public id: Number,
        public ismanager: boolean,
    ) { }
}
