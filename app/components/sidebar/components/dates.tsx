import getFormattedDate from "@/app/lib/getFormattedDate";
import { getSortedPostsData } from "@/app/lib/posts";
import { Button, Card, CardBody } from "@nextui-org/react";
import { get } from "http";
import Link from "next/link";
import GetDates from "../lib/get-dates";

export default function Dates() {
  return (
    <Card>
      <CardBody>
        {GetDates().map((date, index) => (
          <span key={index} className="hover:ml-1 select-none">
            {GetDates()[index]}
          </span>
        ))}
      </CardBody>
    </Card>
  );
}
