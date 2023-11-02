import HeroPost from "./components/post-components/hero-post";
import PostsContainer from "./components/posts-container";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroPost id="Creating-a-Free-API-with-ChatGPT-Unleash-the-Power-of-Conversational-AI" />
        <PostsContainer />
      </div>
    </>
  );
}
