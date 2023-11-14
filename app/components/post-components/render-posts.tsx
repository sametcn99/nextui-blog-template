// Import the necessary modules and components
"use client";
import { Divider } from "@nextui-org/react";
import PostCard from "./post-card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Define the RootState interface for Redux state
interface RootState {
  dateRange: {
    startDate: Date;
    endDate: Date;
  };
}

// Define and export the 'RenderPosts' component
export default function RenderPosts({ posts }: any) {
  // Declare a state variable 'postsToShow' and initialize it as an empty array
  const [postsToShow, setPostsToShow] = useState<BlogPost[]>([]);

  // Retrieve the 'dateRange' object from the Redux store using 'useSelector'
  const dateRange = useSelector((state: RootState) => state.dateRange);
  const startDate = dateRange.startDate;
  const endDate = dateRange.endDate;

  // Define an effect that runs when 'startDate', 'endDate', or 'dateRange' changes
  useEffect(() => {
    // Check if 'dateRange' exists
    if (dateRange) {
      // Filter 'posts' to include only those within the specified date range
      const postsInDateRange = posts.filter((post: any) => {
        const postDate = new Date(post.date);
        return postDate >= new Date(startDate) && postDate <= new Date(endDate);
      });
      // Update the 'postsToShow' state with the filtered posts
      setPostsToShow(postsInDateRange);
    }
    // If 'startDate' and 'endDate' are not specified, show all 'posts'
    if (!startDate && !endDate) {
      setPostsToShow(posts);
    }
  }, [
    startDate,
    endDate,
    dateRange.startDate,
    dateRange.endDate,
    posts,
    dateRange,
  ]);

  // Render each post as a 'PostCard' component separated by a 'Divider'
  return postsToShow.map((post: BlogPost, index: number) => (
    <div key={`${index}-post`}>
      <PostCard post={post} key={`${index}-post-card`} />
      <Divider className="my-4" key={`${index}-divider`} />
    </div>
  ));
}
