import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserLogin): UserToken {
 
    const payload: UserPayload = {
     _id:user._doc._id,
      email: user._doc.email,
      name: user._doc.name,
    };
    
    const jwtToken = this.jwtService.sign(payload)
     
    return {
      access_token: jwtToken
    }
  }
  
  async validateUser(email: string, password: string):Promise <object> {
    const user = await this.userService.findByEmail(email);
      
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return { ...user, password: undefined };
      } 
    }

    throw new Error('Email address or password is incorrect.');
  }
}

 