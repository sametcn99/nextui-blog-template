// This function takes a date string as input and returns a formatted date string.
/**
 * Formats a date string into a localized long date format.
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
export default function getFormattedDate(dateString: string): string {
  // Create a new Date object from the input date string.
  const date = new Date(dateString);

  // Use the Intl.DateTimeFormat constructor to create a formatter.
  const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

  // Use the formatter to format the date string.
  return formatter.format(date);
}
