import { Resolver, Query, Ctx, Int, Arg, Mutation } from "type-graphql"; 
import { Post } from "../entities/Post"
import { MyContext } from "../types"; 

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() { em }: MyContext
    ): Promise<Post[]> {
        return em.find(Post, {});
    }
    
    @Query(() => Post, { nullable: true })
    post(
        @Arg("id", () => Int) _id: number,
        @Ctx() { em }: MyContext
        ): Promise<Post | null> {
        return em.findOne(Post, { _id });
    } 

    @Mutation(() => Post)
    async createPost(
        @Arg("title") title: string,
        @Ctx() { em }: MyContext
        ): Promise<Post> {
        const post = em.create(Post, { title }); 
        await em.persistAndFlush(post)
        return post
    } 
}