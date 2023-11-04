import getFormattedDate from "@/app/lib/getFormattedDate"; // Importing the function to format dates
import { getSortedPostsData, getPostData } from "@/app/lib/posts"; // Importing functions related to posts
import { notFound } from "next/navigation"; // Importing the function to show the "not found" page
import "./styles.css";
import { Card, CardBody } from "@nextui-org/react";

// Function to generate static page parameters
export function generateStaticParams() {
  const posts = getSortedPostsData(); // Getting sorted post data

  return posts.map((post) => ({
    postId: post.id, // Using the post's ID as a parameter
  }));
}

// Function to generate page metadata
export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Getting sorted post data
  const { postId } = params; // Extracting the post ID from parameters

  const post = posts.find((post) => post.id === postId); // Finding the post with the given ID

  if (!post) {
    return {
      title: "Post Not Found", // Using "Post Not Found" as the title if the post is not found
      description: "This post does not exist.", // Add a description for SEO
      keywords: [], // Add an empty tags array to avoid errors
      author: "Unknown", // Add an unknown author to avoid errors
    };
  }

  return {
    title: post.title, // Using the post's title as the title
    description: post.description,
    keywords: post.keywords, // Using the post's tags as the tags
    author: post.author, // Using the post's author as the author
  };
}

// Main function to create the post page
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Getting sorted post data
  const { postId } = params; // Extracting the post ID from parameters
  const page = posts.find((post) => post.id === postId); // Finding the post with the given ID
  if (!page) notFound(); // Displaying a 404 error if the post is not found
  const { title, date, contentHtml, author, keywords } = await getPostData(
    postId
  ); // Fetching post data

  const pubDate = getFormattedDate(date); // Getting a formatted version of the date

  return (
    <div className="flex justify-center px-2 mt-10 w-full min-h-screen">
      <Card>
        <CardBody>
          <article className="max-w-[63rem]">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="font-thin">
              {pubDate} / Author: {author}
            </p>
            <article
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              className="article"
            />
            {/* Add the tags section if tags exist */}
            {keywords && keywords.length > 0 && (
              <div className="flex flex-row flex-wrap justify-center select-none">
                {keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="p-1 text-sm font-thin text-center rounded-full w-fit h-fit"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </article>
        </CardBody>
      </Card>
    </div>
  );
}
