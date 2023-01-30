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

    let firstRowHeight: string | number | undefined =
      target.style.gridTemplateRows.split(" ")[0];
    // caclute firstRowHeight px value from rem value
    firstRowHeight?.replace("rem", "");

    const parent = target.closest("div");
    console.log("parent", parent);

    // const boundingRect = target?.getBoundingClientRect();
    const boundingRect = parent?.getBoundingClientRect();
    if (!boundingRect) return;
    console.log("target", target);
    console.log("boundingRect", boundingRect);

    const topMarginElm = parent?.querySelector(".top-margin");
    if (!topMarginElm) return;
    const topMargin = parseFloat(
      getComputedStyle(topMarginElm).height.replace("px", "")
    );

    // const grandParent = parent?.closest("div");
    // console.log("gran", grandParent);
    const rightElm = parent?.querySelector(".right-margin");

    console.log("typeof rightElm", typeof rightElm);
    // check that typeof rightElm is Element
    if (!rightElm) return;
    const rightMargin = parseFloat(
      getComputedStyle(rightElm).width.replace("px", "")
    );

    console.log("rightMargin", rightMargin);
    console.log("topMargin", topMargin);

    if (!firstRowHeight) return;

    firstRowHeight = parseFloat(firstRowHeight) * 16;
    // console.log("firstRowHeight", firstRowHeight);

    // console.log("target.style", target.style);
    // console.log("e.clientX, e.cli", e.clientX, e.clientY);

    // use clientX and clientY to calculate the x and y coordinates of the click relative to the container
    // the x and y need to take into account the offset of the margin row and column
    console.log("boundingRect", boundingRect);

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top - topMargin;
    // console.log("x, y", x, y);

    // get and viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    console.log("viewportWidth, viewportHeight", viewportWidth, viewportHeight);

    // use the width and height of the container to calculate the day, hour, and minute of the click
    const day = Math.floor((x / (boundingRect.width - rightMargin)) * 7);
    const hour = Math.floor((y / (boundingRect.height - topMargin)) * 24);
    const minute = Math.floor(
      ((y / (boundingRect.height - topMargin)) * 24 - hour) * 60
    );

    console.log("day", day);
    console.log("hour", hour);
    console.log("minute", minute);
    console.log("");
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
