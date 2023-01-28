const Cell = ({
  day,
  date,
  isToday,
}: {
  day: string;
  date: string;
  isToday: boolean;
}) => {
  const todayStyles =
    "ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white";

  const defaultStyles =
    "items-center justify-center font-semibold text-gray-900";

  return (
    <div className="flex items-center justify-center py-3">
      <span className={isToday ? "flex items-baseline" : ""}>
        {day}{" "}
        <span className={isToday ? todayStyles : defaultStyles}>{date}</span>
      </span>
    </div>
  );
};
export default Cell;
