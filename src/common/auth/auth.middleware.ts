import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly jwtService = new JwtService();
  async use(req: Request, _res: Response, next: () => void) {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    if (!token || type !== 'Bearer')
      throw new UnauthorizedException('Unauthorized.');
    try {
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      req.headers = payload;
    } catch {
      throw new UnauthorizedException('Unauthorized.');
    }
    next();
  }
}
