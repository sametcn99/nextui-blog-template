import { getSortedPostsData } from "../lib/posts";
import RenderPosts from "./post-components/render-posts";

export default function PostsContainer() {
  const posts = getSortedPostsData();
  
  return (
    <section className="flex justify-center px-4 w-full min-h-screen bg-red">
      <div className="grid grid-cols-1 h-full w-[61rem]">
        <RenderPosts posts={posts} />
      </div>
    </section>
  );
}
