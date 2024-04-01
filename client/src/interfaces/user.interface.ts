interface UserSignup{
    name: string
    email:string
    password:string
    error?:Error
}
interface UserLogin{
    email:string
    password:string
    error?:Error
}

interface UserToken{
    access_token:string;
}