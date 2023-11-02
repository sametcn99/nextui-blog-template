import { getSortedPostsData } from "../lib/posts";
import PostCard from "./post-components/post-card";
import { Divider } from "@nextui-org/react";

export default function PostsContainer() {
  const posts = getSortedPostsData();

  return (
    <>
      <div className="flex justify-center bg-red min-h-screen w-auto px-4">
        <div className="w-[60rem] grid grid-cols-1 h-full">
          {posts.map((post) => (
            <>
              <PostCard key={post.id} post={post} />
              <Divider className="my-4" key={post.id}/>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
