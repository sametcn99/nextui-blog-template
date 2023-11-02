import getFormattedDate from "@/app/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function HeroPost(id: any) {
  const posts = getSortedPostsData(); // Getting sorted post data
  const postId = id; // Extracting the post ID from parameters
  const { title, date, description } = await getPostData(postId.id); // Fetching post data
  if (!postId) notFound(); // Displaying a 404 error if the post is not found
  const pubDate = getFormattedDate(date); // Getting a formatted version of the date
  // className="light:hover:bg-slate-50 dark:hover:bg-foreground-200"
  return (
    <>
      <section className="flex justify-center items-center w-full select-none">
        <Link href={"/posts/" + postId.id}>
          <Card className="mb-8 h-full max-w-[60rem]">
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
