import { Card, CardBody } from "@nextui-org/react";
import GetDates from "../../../app/utils/get-dates";
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
