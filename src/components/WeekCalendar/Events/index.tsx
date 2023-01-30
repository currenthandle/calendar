import { SyntheticEvent } from "react";
import Event from "./Event";

const Events = () => {
  const events = [
    {
      title: "Breakfast",
      start: new Date(2023, 0, 29, 6, 0),
      end: new Date(2023, 0, 29, 7, 0),
      color: "blue",
    },
    {
      title: "Flight to Paris",
      start: new Date(2023, 0, 30, 7, 30),
      end: new Date(2023, 0, 30, 9, 0),
      color: "pink",
    },
    {
      title: "Flight to Toyko",
      start: new Date(2023, 0, 31, 11, 30),
      end: new Date(2023, 0, 31, 12, 0),
      color: "green",
    },
    {
      title: "Meeting with design team at Disney",
      start: new Date(2023, 0, 29, 9, 0),
      end: new Date(2023, 0, 29, 10, 30),
      color: "grey",
    },
  ];

  // write a click handler that calculates the location of the click using the x and y coordinates of the click event and the offset of the container
  // then use the location to calculate the time of the click (day, hour, and minute)
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const boundingRect = target?.getBoundingClientRect();
    if (!boundingRect) return;
    console.log("target", target);
    console.log("boundingRect", boundingRect);
    let firstRowHeight: string | number | undefined =
      target.style.gridTemplateRows.split(" ")[0];
    // caclute firstRowHeight px value from rem value
    firstRowHeight?.replace("rem", "");
    if (!firstRowHeight) return;
    firstRowHeight = parseFloat(firstRowHeight) * 16;
    console.log("firstRowHeight", firstRowHeight);

    console.log("target.style", target.style);
    console.log("e.clientX, e.cli", e.clientX, e.clientY);

    // use clientX and clientY to calculate the x and y coordinates of the click relative to the container
    // the x and y need to take into account the offset of the margin row and column

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;
    console.log("x, y", x, y);

    // get and viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    console.log("viewportWidth, viewportHeight", viewportWidth, viewportHeight);

    // use the width and height of the container to calculate the day, hour, and minute of the click
    const day = Math.floor((x / boundingRect.width) * 7);
    const hour = Math.floor((y / boundingRect.height) * 24);
    const minute = Math.floor(((y / boundingRect.height) * 24 - hour) * 60);

    console.log("day", day);
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("");
  };

  return (
    <ol
      // className="col-start-1 col-end-2 row-start-1 box-border grid grid-cols-1 sm:grid-cols-7 sm:pr-8	"
      className="col-start-1 col-end-2 row-start-1 box-border grid grid-cols-1 sm:grid-cols-7	"
      style={{
        gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
      }}
      onClick={handleClick}
    >
      {events.map((event, i) => (
        <Event key={event.title + i.toString()} {...event} />
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
            <time dateTime="2023-01-12T06:00">6:00 AM</time>
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
            <time dateTime="2023-01-12T07:30">7:30 AM</time>
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
            <time dateTime="2023-01-15T10:00">10:00 AM</time>
          </p>
        </a>
      </li> */}
    </ol>
  );
};
export default Events;
