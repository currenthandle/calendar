const Event = ({
  title,
  start,
  end,
  color,
}: {
  title: string;
  start: Date;
  end: Date;
  color: string;
}) => {
  // console.log("props", props);
  const startHour = start.getHours();
  // use start and end to calculate event duration in hours
  const duration = end.getHours() - startHour;

  // get day of week from start date
  const dayOfWeek = start.getDay();
  console.log("dayOfWeek", dayOfWeek);

  console.log("duration", duration);
  // use duration to calculate gridRow span

  // console.log("startHour", startHour);
  return (
    <li
      className={`relative mt-px flex  sm:col-start-${dayOfWeek}`}
      style={{ gridRow: `${2 + startHour * 12} / span ${duration * 12}` }}
    >
      <a
        href="#"
        className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg border-2 border-black ${`bg-${color}-50`} p-2 text-xs leading-5 ${`hover:bg-${color}-100`}`}
      >
        <p className={`order-1 font-semibold text-${color}-700`}>{title}</p>
        <p className={`text-${color}-500 group-hover:text-${color}-700`}>
          <time dateTime="2022-01-12T06:00">{startHour}:00 AM</time>
        </p>
      </a>
    </li>
  );
};
export default Event;
