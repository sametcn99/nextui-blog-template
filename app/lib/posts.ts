import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import exp from "constants";

// The directory where blog post files are stored.
const postsDirectory = path.join(process.cwd(), "sampleposts");

// This function retrieves and sorts data from Markdown files representing blog posts.
export function getSortedPostsData() {
  // Get file names under /posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Create an array to store all post data
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" extension from the file name to get the post ID
    const id = fileName.replace(/\.md$/, "");

    // Read the content of the Markdown file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post's metadata section
    const matterResult = matter(fileContents);

    // Create a BlogPost object with extracted data
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      author: matterResult.data.author,
      keywords: matterResult.data.keywords,
    };
    //console.log(blogPost.date);
    // Combine the data with the post ID
    return blogPost;
  });

  // Sort the posts by date in descending order
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPostsInDateRange = (startDate: any, endDate: any) => {
  console.log("startDate: " + startDate + "\nendDate: " + endDate);
  // Get all posts
  const allPostsData = getSortedPostsData();

  // Filter posts that fall within the specified date range
  const postsInDateRange = allPostsData.filter((post) => {
    const postDate = new Date(post.date);
    return postDate >= startDate && postDate <= endDate;
  });
  return postsInDateRange;
};

// This asynchronous function retrieves and processes data for a specific blog post.
export async function getPostData(id: string) {
  // Construct the full path to the Markdown file for the specified post
  const fullPath = path.join(postsDirectory, `${id}.md`);

  // Read the content of the Markdown file as a string
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post's metadata section
  const matterResult = matter(fileContents);

  // Process the content using the remark and html plugins to convert Markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  // Convert the processed content to a string of HTML
  const contentHtml = processedContent.toString();

  // Create a BlogPost object with HTML content
  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    author: matterResult.data.author,
    contentHtml,
    keywords: matterResult.data.keywords,
  };

  // Combine the data with the post's ID and return it
  return blogPostWithHTML;
}
