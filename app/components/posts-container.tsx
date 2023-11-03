import { getSortedPostsData } from "../lib/posts";
import PostCard from "./post-components/post-card";
import { Divider } from "@nextui-org/react";

export default function PostsContainer() {
  const posts = getSortedPostsData();

  return (
    <>
      <section className="flex justify-center px-4 w-full min-h-screen bg-red">
        <div className="grid grid-cols-1 h-full w-[61rem]">
          {posts.map((post) => (
            <>
              <PostCard key={post.id} post={post} />
              <Divider className="my-4" key={post.id} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
