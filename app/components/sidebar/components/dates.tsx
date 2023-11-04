import { Card, CardBody } from "@nextui-org/react";
import GetDates from "../lib/get-dates";

export default function Dates() {
  return (
    <Card>
      <CardBody>
        {GetDates().map((date, index) => (
          <span key={index} className="select-none hover:ml-1">
            {GetDates()[index]}
          </span>
        ))}
      </CardBody>
    </Card>
  );
}
