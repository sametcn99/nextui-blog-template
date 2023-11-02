import HeroPost from "./components/post-components/hero-post";
import PostsContainer from "./components/posts-container";

export default function Home() {
  //write file name without file extension into hero post id for select hero post
  return (
    <>
      <div className="">
        <HeroPost id="Creating-a-Free-API-with-ChatGPT-Unleash-the-Power-of-Conversational-AI" />
        <PostsContainer />
      </div>
    </>
  );
}
