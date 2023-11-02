import getFormattedDate from "@/app/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default async function HeroPost(id: any) {
  const postId = id; // Extracting the post ID from parameters
  const post = await getPostData(postId.id); // Fetching post data
  const { title, date, description } = post;
  const pubDate = getFormattedDate(date); // Getting a formatted version of the date

  return (
    <>
      <section className="flex justify-center items-center w-full select-none">
        <Link href={"/posts/" + postId.id}>
          <Card className="mb-8 h-full max-w-[62rem]">
            <CardBody className="hover:bg-foreground-200">
              <h1 className="text-3xl font-bold select-none">Featured Post</h1>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-xl font-thin">{pubDate}</p>
              <p>{description}</p>
            </CardBody>
          </Card>
        </Link>
      </section>
    </>
  );
}
