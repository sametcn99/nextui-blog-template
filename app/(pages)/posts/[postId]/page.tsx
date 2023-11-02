import getFormattedDate from "@/app/lib/getFormattedDate"; // Importing the function to format dates
import { getSortedPostsData, getPostData } from "@/app/lib/posts"; // Importing functions related to posts
import { notFound } from "next/navigation"; // Importing the function to show the "not found" page
import "./styles.css";

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
    };
  }

  return {
    title: post.title, // Using the post's title as the title
    description: post.description,
  };
}

// Main function to create the post page
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // Getting sorted post data
  const { postId } = params; // Extracting the post ID from parameters
  const page = posts.find((post) => post.id === postId); // Finding the post with the given ID
  if (!page) notFound(); // Displaying a 404 error if the post is not found
  const { title, date, contentHtml, author } = await getPostData(postId); // Fetching post data

  const pubDate = getFormattedDate(date); // Getting a formatted version of the date

  return (
    <div className="flex justify-center w-full min-h-screen">
      <article className="px-4 w-[63rem] ">
        <p>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="font-thin">
            {pubDate} / Author: {author}
          </p>
        </p>
        <article
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="article"
        />
      </article>
    </div>
  );
}
