import Link from "next/link";
import getFormattedDate from "@/app/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  const { id, title, date, description } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <>
      <div className="h-full overflow-hidden mb-2">
        <Link href={"/posts/" + id} className=" text-3xl font-semibold">
          {title}
        </Link>
        <span className="ml-3 font-thin">{formattedDate}</span>
        <br />
        {description}
        <p>
          <Link href="sample-post1">Read More...</Link>
        </p>
      </div>
    </>
  );
}
