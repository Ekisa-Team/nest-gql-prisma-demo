import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResolver } from './users.resolver';

@Module({
  providers: [UserResolver, PrismaService],
})
export class UsersModule {}
