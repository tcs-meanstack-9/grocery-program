export class User {
    constructor(
        public _id?:string,
        public firstName?:string, 
        public lastName?:string,
        public email?:string,
        public password?:string,
        public dateOfBirth?:string,
        public phoneNumber?:string,
        public address?:string,
        public userId?:string
    ) {}
}