import HeroPost from "./components/post-components/hero-post";
import PostsContainer from "./components/posts-container";
import Sidebar from "./components/sidebar/sidebar";

export default function Home() {
  //write file name without file extension into hero post id for select hero post
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mt-10 w-full">
        <section className="w-full lg:w-fit">
          <HeroPost id="Creating-a-Free-API-with-ChatGPT-Unleash-the-Power-of-Conversational-AI" />
          <PostsContainer />
        </section>
        <Sidebar />
      </div>
    </>
  );
}
