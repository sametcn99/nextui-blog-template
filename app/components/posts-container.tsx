import { getSortedPostsData } from "../lib/posts"; // Import the getSortedPostsData function from a relative path.

import RenderPosts from "./post-components/render-posts"; // Import the RenderPosts component from a relative path.

export default function PostsContainer() {
  const posts = getSortedPostsData(); // Call the getSortedPostsData function to retrieve the sorted posts data.

  return (
    <section className="flex justify-center px-4 w-full min-h-screen bg-red">
      <div className="grid grid-cols-1 h-full w-[61rem]">
        {/* Render the RenderPosts component and pass the 'posts' data as a prop. */}
        <RenderPosts posts={posts} />
      </div>
    </section>
  );
}
