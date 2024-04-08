import { Controller, Post, HttpCode,HttpStatus, UseGuards,Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/authRequest';
import { IsPublic } from './decorators/is-public.decorator';

@Controller('login')
export class AuthController {
    constructor(private readonly authService:AuthService){ }
    @Post('')
    @IsPublic()
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req:AuthRequest){     
       
    return this.authService.login(req.user)
    } 
}
   