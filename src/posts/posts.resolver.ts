import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Post, PostCreateInput } from './post.types';

@Resolver(() => Post)
export class PostResolvers {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async posts() {
    return this.prisma.post.findMany();
  }

  @Query(() => Post)
  async post(@Args('id') args: string) {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(args),
      },
    });
  }

  @Mutation(() => Post)
  async createPost(@Args('input') input: PostCreateInput) {
    return this.prisma.post.create({
      data: input,
    });
  }

  // @Mutation('updatePost')
  // async update(@Args('input') args: PostUpdateInput) {
  //   const { id, published, title, content } = args;
  //   return this.prisma.post.update({
  //     where: {
  //       id: parseInt(id),
  //     },
  //     data: {
  //       ...(published && { published }),
  //       ...(title && { title }),
  //       ...(content && { content }),
  //     },
  //   });
  // }

  @Mutation(() => Post)
  async deletePost(@Args('id') args: string) {
    return this.prisma.post.delete({
      where: {
        id: parseInt(args),
      },
    });
  }
}
