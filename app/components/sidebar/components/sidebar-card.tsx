import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function Categories() {
  const data = [
    "August 2023",
    "September 2023",
    "October 2023",
    "November 2023",
    "December 2023",
    "January 2024",
    "February 2024",
    "March 2024",
  ];

  return (
    <Card className="mx-4 mb-6 w-full lg:mx-9 h-fit lg:w-[20rem]">
      <CardBody>
        <p className="text-2xl font-bold">Navigation</p>
        {data.map((data, index) => (
          <Link key={index} href={"/"} className="hover:ml-1">
            {data}
          </Link>
        ))}
      </CardBody>
    </Card>
  );
}
