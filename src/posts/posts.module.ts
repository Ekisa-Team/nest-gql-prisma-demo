import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostResolvers } from './posts.resolver';

@Module({
  providers: [PostResolvers, PrismaService],
})
export class PostsModule {}
