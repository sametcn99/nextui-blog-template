import { Divider } from "@nextui-org/react";
import PostCard from "./post-card";

export default function RenderPosts({ posts }: any) {
  return posts.map((post: BlogPost) => (
    <>
      <PostCard key={post.id} post={post} />
      <Divider className="my-4" key={post.id} />
    </>
  ));
}
