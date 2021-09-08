import { Post } from '.prisma/client';
import { NewPost, UpdatePost } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    post(id: string): Promise<Post | null>;
    posts(): Promise<Post[]>;
    createPost(input: NewPost): Promise<Post>;
    updatePost(input: UpdatePost): Promise<Post>;
    deletePost(id: string): Promise<Post>;
}
