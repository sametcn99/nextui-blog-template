import HeroPost from "./components/post-components/hero-post";
import PostsContainer from "./components/posts-container";
import Sidebar from "./components/sidebar/sidebar";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  //write file name without file extension into hero post id for select hero post
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mt-10 space-y-4 w-full">
        <Card className="mx-4">
          <CardBody>
            <section className="w-full lg:w-fit">
              <HeroPost />
              <PostsContainer />
            </section>
          </CardBody>
        </Card>
        <Sidebar />
      </div>
    </>
  );
}
