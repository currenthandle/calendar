import Cell from "./Cell";
import useWeek from "../hooks/useWeek";

const Narrow = () => {
  const { daysOfWeek, currentDay } = useWeek();

  return (
    <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
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
export default Narrow;
