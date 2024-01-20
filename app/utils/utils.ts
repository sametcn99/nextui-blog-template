/**
 * Dynamically generates the site URL based on the environment.
 *
 * Checks if the environment is production and defines the base URL
 * accordingly, returning the appropriate base URL string for either
 * production or local development.
 */
export const getSiteUrl = () => {
  // Dynamically generate the site URL based on the environment in which the page is running.

  // Check if the environment is production.
  const isProduction = process.env.NODE_ENV === "production";

  // Define the base URL for both production and local development environments.
  const baseUrl = isProduction
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000";

  // Return the appropriate base URL based on the environment.
  return baseUrl;
};
