// Import the 'Link' component from 'next/link' and the 'getFormattedDate' function
import Link from "next/link";
import getFormattedDate from "@/app/lib/getFormattedDate";

// Define the 'Props' type for the 'PostCard' component
type Props = {
  post: BlogPost;
};

// Define and export the 'PostCard' component
export default function PostCard({ post }: Props, index: number) {
  // Destructure properties from the 'post' object
  const { id, title, date, description } = post;

  // Format the date using the 'getFormattedDate' function
  const formattedDate = getFormattedDate(date);

  // Limit the description to 300 characters, adding an ellipsis if it's longer
  const limitedDescription =
    description.length > 300 ? description.slice(0, 300) + "..." : description;

  return (
    // Create a container div with a hover effect
    <div className="h-full hover:ml-1">
      {/* Create a link to the post's detail page using 'Link' */}
      <Link href={"/posts/" + id} className="text-xl font-semibold">
        {title}
      </Link>
      <br />
      {/* Display the formatted date */}
      <span className="font-thin">{formattedDate}</span>
      <br />
      {/* Display the limited description */}
      {limitedDescription}
      {/* Create a link to the post's detail page */}
      <Link href={"/posts/" + id}> Read More...</Link>
    </div>
  );
}
