import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewPost, UpdatePost } from 'src/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostResolvers {
  constructor(private readonly postsService: PostsService) {}

  @Query('posts')
  async posts() {
    return this.postsService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return this.postsService.post(args);
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postsService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postsService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postsService.deletePost(args);
  }
}
