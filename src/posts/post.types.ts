import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  published: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  userId: number;
}

@InputType()
export class PostCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  published?: boolean;

  @Field()
  userId: number;
}
