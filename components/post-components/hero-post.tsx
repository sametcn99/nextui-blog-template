// Import necessary modules and components
import getFormattedDate from "@/app/utils/getFormattedDate";
import GetRandomPost from "@/app/utils/getRandomPost";
import { getPostData } from "@/app/utils/posts";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

// Define and export an asynchronous function 'HeroPost'
export default async function HeroPost() {
  // Fetch a random post's data using 'GetRandomPost' and 'getPostData'
  const post = await getPostData(GetRandomPost());

  // Destructure properties from the 'post' object
  const { title, date, description } = post;

  // Get a formatted version of the date using 'getFormattedDate'
  const pubDate = getFormattedDate(date);

  return (
    // Create a section with flex layout, centering content
    <section className="flex justify-center items-center w-full select-none">
      {/* Create a link to the post's detail page using 'Link' */}
      <Link href={"/posts/" + post.id}>
        {/* Create a card component */}
        <Card className="mb-8 h-full max-w-[62rem]">
          {/* Create a card body with a hover effect */}
          <CardBody className="hover:bg-foreground-200">
            {/* Display the "Featured Post" heading */}
            <h1 className="text-3xl font-bold select-none">Featured Post</h1>
            {/* Display the post's title */}
            <h1 className="text-2xl font-bold">{title}</h1>
            {/* Display the formatted publication date */}
            <p className="text-xl font-thin">{pubDate}</p>
            {/* Display the post description */}
            <p>{description}</p>
          </CardBody>
        </Card>
      </Link>
    </section>
  );
}
