const Event = ({
  title,
  // start,
  // end,
  date,
  duration,
  color,
  timeZone,
}: {
  title: string;
  date: Date;
  duration: number;
  color: string;
  timeZone: string;
}) => {
  const getTimeZone = () => {
    if (timeZone === "America/Pacific") {
      return 8;
    }
    return 0;
  };
  const hourOffset = getTimeZone();

  const start = new Date(date);
  let startHour = start.getHours() + hourOffset;
  startHour = startHour > 23 ? 0 : startHour;

  const getFormatHour = (hour: number) => {
    if (hour > 12) {
      return [hour - 12, "PM"];
    }
    return [hour, "AM"];
  };
  const formattedHour = getFormatHour(startHour);

  const dayOfWeek = start.getDay();

  return (
    <li
      className={`relative mt-px flex  ${
        /*`sm:col-start-${dayOfWeek + 1}`*/ ""
      }`}
      style={{
        gridRow: `${2 + startHour * 12} / span ${duration / 5}`,
        gridColumnStart: dayOfWeek + 1,
      }}
    >
      <a
        href="#"
        className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg border-2 border-black ${`bg-${color}-50`} p-2 text-xs leading-5 ${`hover:bg-${color}-100`}`}
      >
        <p className={`order-1 font-semibold text-${color}-700`}>{title}</p>
        <p className={`text-${color}-500 group-hover:text-${color}-700`}>
          <time dateTime="2022-01-12T06:00">
            {formattedHour[0]}:00{formattedHour[1]}
          </time>
        </p>
      </a>
    </li>
  );
};
export default Event;
