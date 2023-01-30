import { MouseEvent, MouseEventHandler, SyntheticEvent } from "react";
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
    console.log("hello");
    const target = e.target as HTMLElement;
    const parent = target.closest("div");

    const boundingRect = parent?.getBoundingClientRect();
    if (!boundingRect) return;

    const topMarginElm = parent?.querySelector(".top-margin");
    if (!topMarginElm) return;
    const topMargin = parseFloat(
      getComputedStyle(topMarginElm).height.replace("px", "")
    );

    const rightElm = parent?.querySelector(".right-margin");
    if (!rightElm) return;
    const rightMargin = parseFloat(
      getComputedStyle(rightElm).width.replace("px", "")
    );

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top - topMargin;

    // use the width and height of the container to calculate the day, hour, and minute of the click
    const day = Math.floor((x / (boundingRect.width - rightMargin)) * 7);
    const hour = Math.floor((y / (boundingRect.height - topMargin)) * 24);
    const minute = Math.floor(
      ((y / (boundingRect.height - topMargin)) * 24 - hour) * 60
    );

    console.log("day", day);
    console.log("hour", hour);
    console.log("minute", minute);
  };

  return (
    <ol
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7	sm:pr-8"
      // className="col-start-1 col-end-2 row-start-1 box-border grid grid-cols-1 sm:grid-cols-7	"
      style={{
        gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
      }}
      onClick={handleClick}
    >
      {events.map((event, i) => (
        <Event key={event.title + i.toString()} {...event} />
      ))}
    </ol>
  );
};
export default Events;
