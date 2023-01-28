const Cell = ({
  day,
  date,
  isToday,
}: {
  day: string;
  date: string;
  isToday: boolean;
}) => {
  const defaultStyles =
    "mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900";

  const todayStyles =
    "mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white";
  return (
    <button type="button" className="flex flex-col items-center pt-2 pb-3">
      {day[0]}{" "}
      <span className={isToday ? todayStyles : defaultStyles}>{date}</span>
    </button>
  );
};
export default Cell;
