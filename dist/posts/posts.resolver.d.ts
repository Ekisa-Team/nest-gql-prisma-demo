import { NewPost, UpdatePost } from 'src/graphql';
import { PostsService } from './posts.service';
export declare class PostResolvers {
    private readonly postsService;
    constructor(postsService: PostsService);
    posts(): Promise<import(".prisma/client").Post[]>;
    post(args: string): Promise<import(".prisma/client").Post>;
    create(args: NewPost): Promise<import(".prisma/client").Post>;
    update(args: UpdatePost): Promise<import(".prisma/client").Post>;
    delete(args: string): Promise<import(".prisma/client").Post>;
}
