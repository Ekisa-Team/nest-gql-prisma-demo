import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostResolvers } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsService, PostResolvers, PrismaService],
})
export class PostsModule {}
