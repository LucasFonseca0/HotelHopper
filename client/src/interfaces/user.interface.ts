interface UserSignup{
    name: string
    email:string
    password:string
  
}
interface UserLogin{
    email:string
    password:string
    
}

interface UserToken{
    access_token:string;
}


interface UserInfo {
    name: string;
    email: string;
  }