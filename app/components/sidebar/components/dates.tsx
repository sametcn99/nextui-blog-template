import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function Dates() {
  const dates = [
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
    <Card>
      <CardBody>
        {dates.map((date, index) => (
          <Link key={index} href={"/"} className="hover:ml-1">
            {date}
          </Link>
        ))}
      </CardBody>
    </Card>
  );
}
