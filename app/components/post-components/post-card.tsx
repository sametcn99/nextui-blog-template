import Link from "next/link";
import getFormattedDate from "@/app/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  const { id, title, date, description } = post;
  const formattedDate = getFormattedDate(date);
  const limitedDescription =
    description.length > 300 ? description.slice(0, 300) + "..." : description;

  return (
    <>
      <div className="overflow-hidden mb-2 h-full">
        <Link href={"/posts/" + id} className="text-3xl font-semibold">
          {title}
        </Link>
        <span className="ml-3 font-thin">{formattedDate}</span>
        <br />
        {limitedDescription}
        <Link href={"/posts/" + id}>Read More...</Link>
      </div>
    </>
  );
}
