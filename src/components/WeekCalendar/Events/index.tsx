import Event from "./Event";

const Events = () => {
  const events = [
    {
      title: "Breakfast",
      start: new Date(2022, 0, 28, 6, 0),
      end: new Date(2022, 0, 28, 7, 0),
      color: "blue",
    },
    {
      title: "Flight to Paris",
      start: new Date(2022, 0, 27, 7, 30),
      end: new Date(2022, 0, 27, 9, 0),
      color: "pink",
    },
    {
      title: "Flight to Toyko",
      start: new Date(2022, 0, 12, 11, 30),
      end: new Date(2022, 0, 12, 12, 0),
      color: "green",
    },
    {
      title: "Meeting with design team at Disney",
      start: new Date(2022, 0, 12, 9, 0),
      end: new Date(2022, 0, 12, 10, 30),
      color: "grey",
    },
  ];

  return (
    <ol
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
      style={{
        gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
      }}
    >
      {events.map((event) => (
        <Event key={event.title} {...event} />
      ))}
      {/*       
      <li
        className="relative mt-px flex sm:col-start-3"
        style={{ gridRow: `${2 + 23 * 12} / span 12` }}
      >
        <a
          href="#"
          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
        >
          <p className="order-1 font-semibold text-blue-700">Breakfast</p>
          <p className="text-blue-500 group-hover:text-blue-700">
            <time dateTime="2022-01-12T06:00">6:00 AM</time>
          </p>
        </a>
      </li>
      <li
        className="relative mt-px flex sm:col-start-3"
        style={{ gridRow: "92 / span 30" }}
      >
        <a
          href="#"
          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
        >
          <p className="order-1 font-semibold text-pink-700">Flight to Paris</p>
          <p className="text-pink-500 group-hover:text-pink-700">
            <time dateTime="2022-01-12T07:30">7:30 AM</time>
          </p>
        </a>
      </li>
      <li
        className="relative mt-px hidden sm:col-start-6 sm:flex"
        style={{ gridRow: "122 / span 24" }}
      >
        <a
          href="#"
          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 hover:bg-gray-200"
        >
          <p className="order-1 font-semibold text-gray-700">
            Meeting with design team at Disney
          </p>
          <p className="text-gray-500 group-hover:text-gray-700">
            <time dateTime="2022-01-15T10:00">10:00 AM</time>
          </p>
        </a>
      </li> */}
    </ol>
  );
};
export default Events;
