import { Card, CardBody } from "@nextui-org/react";
import GetDates from "../lib/get-dates";
import { getPostsInDateRange } from "@/app/lib/posts";
import DateItems from "./dateItems";

export default function Dates() {
  const dates = GetDates().OutputString;
  const dateStart = GetDates().OutputDateStart;
  const dateEnd = GetDates().OutputDateEnd;

  return (
    <Card>
      <CardBody>
        <ol>
          <DateItems dates={dates} dateStart={dateStart} dateEnd={dateEnd} />
        </ol>
      </CardBody>
    </Card>
  );
}
