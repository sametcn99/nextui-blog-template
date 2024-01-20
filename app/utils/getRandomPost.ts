import { getSortedPostsData } from "@/app/utils/posts"; // Import the getSortedPostsData function from the specified module.

/**
 * Get a random post.
 * Gets all post data, selects a random post, and returns the id of the random post.
 * @returns {string} The id of a random post.
 */
function GetRandomPost() {
  const allPostsData = getSortedPostsData(); // Call the getSortedPostsData function to get an array of post data.
  const randomPost =
    allPostsData[Math.floor(Math.random() * allPostsData.length)]; // Select a random post from the array using Math.random().
  randomPost.id; // This line appears to be incomplete. It references the 'id' property of 'randomPost' but doesn't do anything with it.
  return randomPost.id; // Return the 'id' of the randomly selected post.
}

export default GetRandomPost; // Export the GetRandomPost function for use in other parts of the application.
