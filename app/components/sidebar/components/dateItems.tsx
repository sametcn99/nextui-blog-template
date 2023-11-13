"use client";

import { setStartDate, setEndDate } from "@/app/utils/dateRangeSlice";
import { useDispatch } from "react-redux";

export default function DateItems({ dates, dateStart, dateEnd }: any) {
  const dispatch = useDispatch();
  const handleStartDateChange = (newStartDate: any) => {
    dispatch(setStartDate(newStartDate));
  };
  const handleEndDateChange = (newEndDate: any) => {
    dispatch(setEndDate(newEndDate));
  };

  return dates.map((date: any, index: number) => (
    <li
      key={index}
      className="select-none hover:ml-1"
      id={`${dateStart[index]} ${index}/${dateEnd[index]}`}
      onClick={() => {
        handleStartDateChange(dateStart[index]);
        handleEndDateChange(dateEnd[index]);
      }}
    >
      {console.log(index + 1)}
      {dates[index]}
    </li>
  ));
}
