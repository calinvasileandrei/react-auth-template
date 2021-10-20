
export interface UserModel {
    _id:string,
    email:string,
    roles: string[]
    accountStatus:string,
    firstName?:string,
    lastName?:string,
    birthday?:string,
}
