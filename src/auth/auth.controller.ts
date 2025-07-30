import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { RequestWithUser } from './types/request-with-user.interface';
@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req: RequestWithUser) {
    return req.user;
  }
}
