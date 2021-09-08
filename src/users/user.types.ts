import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.types';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [Post])
  posts: Post[];
}

@InputType()
export class UserCreateInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
