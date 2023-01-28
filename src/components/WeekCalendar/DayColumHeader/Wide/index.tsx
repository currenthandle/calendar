import Cell from "./Cell";
import dayjs from "dayjs";

const Wide = () => {
  // const getDatesInWeek = () => {
  //   // use dayjs to get all the days and dates in the current week in ["Tuesday 11", "Wednesday 12", ...] format
  //   const days = dayjs.weekdays().map((day) => {

  // };

  // use dayjs to get the current day and date in ["Tuesday", 11] format
  const currentDay = dayjs().format("dddd D").split(" ");
  // use dayjs to get all the days and dates in the current week in ["Tuesday 11", "Wednesday 12", ...] format

  // console.log("dayjs().day()", dayjs().day(1).format("dddd D"));
  // console.log("currentDay", currentDay);
  // console.log("currentDay", typeof currentDay);
  // console.log("days", days);

  const getDatesOfWeek = () => {
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      // daysOfWeek.push(dayjs().day(i).format("dddd D").split(" "));
      daysOfWeek.push(dayjs().day(i).format("ddd D").split(" "));
    }
    return daysOfWeek;
  };
  const daysOfWeek = getDatesOfWeek();
  console.log("daysOfWeek", daysOfWeek);

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
      {/*       
      <div className="flex items-center justify-center py-3">
        <span>
          Tue{" "}
          <span className="items-center justify-center font-semibold text-gray-900">
            11
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center py-3">
        <span className="flex items-baseline">
          Wed{" "}
          <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            12
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center py-3">
        <span>
          Thu{" "}
          <span className="items-center justify-center font-semibold text-gray-900">
            13
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center py-3">
        <span>
          Fri{" "}
          <span className="items-center justify-center font-semibold text-gray-900">
            14
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center py-3">
        <span>
          Sat{" "}
          <span className="items-center justify-center font-semibold text-gray-900">
            15
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center py-3">
        <span>
          Sun{" "}
          <span className="items-center justify-center font-semibold text-gray-900">
            16
          </span>
        </span>
      </div> */}
    </div>
  );
};
export default Wide;
