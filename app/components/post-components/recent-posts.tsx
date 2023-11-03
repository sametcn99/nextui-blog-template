import { getSortedPostsData } from "@/app/lib/posts";
import { Divider } from "@nextui-org/react";
import PostCard from "./post-card";

export default function RecentPosts() {
  const posts = getSortedPostsData();

  return posts.map((post) => (
    <>
      <PostCard key={post.id} post={post} />
      <Divider className="my-4" key={post.id} />
    </>
  ));
}
