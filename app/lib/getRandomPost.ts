import { getSortedPostsData } from "@/app/lib/posts";

function GetRandomPost() {
  const allPostsData = getSortedPostsData();
  const randomPost =
    allPostsData[Math.floor(Math.random() * allPostsData.length)];
  randomPost.id;
  return randomPost.id;
}

export default GetRandomPost;
