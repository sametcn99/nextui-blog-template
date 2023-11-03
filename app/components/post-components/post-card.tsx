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
    <div className="h-full hover:ml-1">
      <Link href={"/posts/" + id} className="text-xl font-semibold">
        {title}
      </Link>
      <br />
      <span className="font-thin">{formattedDate}</span>
      <br />
      {limitedDescription}
      <Link href={"/posts/" + id}>Read More...</Link>
    </div>
  );
}
