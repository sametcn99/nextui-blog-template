import Categories from "./components/categories";
import Dates from "./components/dates";

export default function Sidebar() {
  return (
    <section className="sticky top-20 px-4 mb-6 space-y-2 w-full lg:px-0 lg:mx-9 h-fit lg:w-[65rem] 2xl:w-[20rem]">
      <Dates />
    </section>
  );
}
