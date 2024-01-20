// Import the 'getSortedPostsData' function from the '@/app/lib/posts' module
import { getSortedPostsData } from "@/app/utils/posts";

// Define and export a functional component named 'GetDates'
/**
 * Gets aggregated date ranges and post counts from blog posts.
 * Retrieves all blog posts, aggregates them by month and year, and returns:
 * - An array of formatted string labels for each month-year.
 * - An array of JS Date objects with the start of each month.
 * - An array of JS Date objects with the end of each month.
 */
export default function GetDates() {
  // Call 'getSortedPostsData' to retrieve data
  const data = getSortedPostsData();

  // Initialize an object to count posts per month
  const monthCount: { [key: string]: number } = {};

  // Initialize arrays to store output data
  const OutputString: string[] = [];
  const OutputDateStart: Date[] = [];
  const OutputDateEnd: Date[] = [];

  // Extract dates from the 'data' array
  const datesFromData = data.map((post) => post.date);

  // Calculate post counts for each month and year
  datesFromData.map((datestring) => {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth();

    // Create a key in the format 'year-month'
    const key = `${year}-${month}`;
    if (key in monthCount) {
      monthCount[key]++;
    } else {
      monthCount[key] = 1;
    }
  });

  // Iterate through the keys of 'monthCount'
  for (const key in monthCount) {
    const [year, month] = key.split("-");

    // Get the full month name
    const monthName = new Date(
      parseInt(year),
      parseInt(month),
      1
    ).toLocaleString("en-US", { month: "long" });

    // Create start and end dates for the month
    const startDate = new Date(parseInt(year), parseInt(month), 1);
    const endDate = new Date(parseInt(year), parseInt(month) + 1, 0);

    // Push formatted strings and date ranges into respective arrays
    OutputString.push(`${monthName} ${year} (${monthCount[key]})`);
    OutputDateStart.push(startDate);
    OutputDateEnd.push(endDate);
  }

  // Return an object with the calculated data
  return { OutputString, OutputDateStart, OutputDateEnd };
}
