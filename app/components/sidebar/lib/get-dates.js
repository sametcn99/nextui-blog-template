import getFormattedDate from "@/app/lib/getFormattedDate";
import { getSortedPostsData } from "@/app/lib/posts";
import { Card, CardBody } from "@nextui-org/react";
import { get } from "http";
import Link from "next/link";

export default function GetDates() {
  const data = getSortedPostsData();
  const monthCount = {};
  const Output = []
  //console.log(data.map((post) => post.date));
  const datesFromData = data.map((post) => post.date);
  //console.log(datesFromData);
  datesFromData.map((datestring) => {
    getFormattedDate(datestring);
    //console.log(getFormattedDate(datestring));
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth();

    const key = `${year}-${month}`;
    if (key in monthCount) {
      monthCount[key]++;
    } else {
      monthCount[key] = 1;
    }
  });
  for (const key in monthCount) {
    const [year, month] = key.split('-');
    const monthName = new Date(year, month, 1).toLocaleString('en-US', { month: 'long' });
    //console.log(`${monthName} ${year} (${monthCount[key]})`);
    Output.push(`${monthName} ${year} (${monthCount[key]})`)
  }
  return Output;
}
