import { PrismaService } from 'src/prisma.service';
import { PostCreateInput } from './post.types';
export declare class PostResolvers {
    private prisma;
    constructor(prisma: PrismaService);
    posts(): Promise<import(".prisma/client").Post[]>;
    post(args: string): Promise<import(".prisma/client").Post>;
    createPost(input: PostCreateInput): Promise<import(".prisma/client").Post>;
    deletePost(args: string): Promise<import(".prisma/client").Post>;
}
