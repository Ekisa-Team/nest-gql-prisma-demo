import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { User, UserCreateInput } from './user.types';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    return this.prisma.post.findMany({
      where: {
        user: { id: user.id },
      },
    });
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.prisma.user.create({
      data: input,
    });
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    return this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
