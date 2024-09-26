export interface UserList{
    id:number,
    email:string,
    password:string,
    username:string,
    phone:string,
    name:{
        firstname:string,
        lastname:string
    }
}