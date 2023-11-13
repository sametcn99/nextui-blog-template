export default function DateItems({ dates, dateStart, dateEnd }: any) {
  return dates.map((date: any, index: any) => (
    <li
      key={index}
      className="select-none hover:ml-1"
      id={`${dateStart[index]}/${dateEnd[index]}`}
    >
      {dates[index]}
    </li>
  ));
}
