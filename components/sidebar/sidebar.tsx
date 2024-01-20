// Import the 'Dates' component from the './components/dates' file
import Dates from "./components/dates";

// Define and export a functional component named 'Sidebar'
export default function Sidebar() {
  return (
    // Start of JSX code for the 'Sidebar' component
    <section
      // Apply CSS classes for styling (e.g., sticky, top-20, padding, margin, etc.)
      className="sticky top-20 px-4 mb-6 space-y-2 w-full lg:px-0 lg:mx-9 h-fit lg:w-[65rem] 2xl:w-[20rem]"
    >
      {/* Render the 'Dates' component inside the 'section' element */}
      <Dates />
    </section>
    // End of JSX code for the 'Sidebar' component
  );
}
