import Cell from "./Cell";
import useWeek from "../hooks/useWeek";

const Wide = () => {
  const { daysOfWeek, currentDay } = useWeek();

  return (
    <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
      <div className="col-end-1 w-14" />
      {daysOfWeek.map((day) => (
        <Cell
          key={day[0]}
          day={day[0] as string}
          date={day[1] as string}
          isToday={day[1] === currentDay[1]}
        />
      ))}
    </div>
  );
};
export default Wide;
