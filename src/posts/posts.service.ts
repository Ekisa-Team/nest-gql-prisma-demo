import { Post } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { NewPost, UpdatePost } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Obtener un post
   *
   */
  async post(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async createPost(input: NewPost): Promise<Post> {
    return this.prisma.post.create({
      data: input,
    });
  }

  async updatePost(input: UpdatePost): Promise<Post> {
    const { id, published, title, content } = input;
    return this.prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
