import RecentPosts from "./post-components/recent-posts";

export default function PostsContainer() {

  return (
    <section className="flex justify-center px-4 w-full min-h-screen bg-red">
      <div className="grid grid-cols-1 h-full w-[61rem]">
        <RecentPosts />
      </div>
    </section>
  );
}
