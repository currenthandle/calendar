import type { MouseEvent } from "react";
import { useLayoutEffect, useRef } from "react";
import DayColumHeader from "./DayColumHeader";
import Events from "./Events";
import Header from "./header";
import HourLabel from "./HourLabel";

export default function Example() {
  const container = useRef<HTMLDivElement>(null);
  const containerNav = useRef<HTMLDivElement>(null);
  const containerOffset = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    if (container.current && containerNav.current && containerOffset.current) {
      container.current.scrollTop =
        ((container.current.scrollHeight -
          containerNav.current.offsetHeight -
          containerOffset.current.offsetHeight) *
          currentMinute) /
        1440;
    }
  }, []);
  // all the hours in a day starting with 12AM and ending with 11PM
  const hoursOfDay = [
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
  ];

  // write a click handler that calculates the location of the click using the x and y coordinates of the click event and the offset of the container
  // then use the location to calculate the time of the click (day, hour, and minute)
  // const handleClick = (e: MouseEvent) => {
  //   console.log("hello");
  //   const target = e.currentTarget as HTMLElement;
  //   console.log("target", target);
  //   // const parent = target.closest("div");

  //   const boundingRect = target?.getBoundingClientRect();
  //   if (!boundingRect) return;

  //   const topMarginElm = target?.querySelector(".top-margin");
  //   if (!topMarginElm) return;
  //   const topMargin = parseFloat(
  //     getComputedStyle(topMarginElm).height.replace("px", "")
  //   );

  //   const rightElm = target?.querySelector(".right-margin");
  //   if (!rightElm) return;
  //   const rightMargin = parseFloat(
  //     getComputedStyle(rightElm).width.replace("px", "")
  //   );

  //   const x = e.clientX - boundingRect.left;
  //   const y = e.clientY - boundingRect.top - topMargin;

  //   // use the width and height of the container to calculate the day, hour, and minute of the click
  //   const day = Math.floor((x / (boundingRect.width - rightMargin)) * 7);
  //   const hour = Math.floor((y / (boundingRect.height - topMargin)) * 24);
  //   const minute = Math.floor(
  //     ((y / (boundingRect.height - topMargin)) * 24 - hour) * 60
  //   );

  //   console.log("day", day);
  //   console.log("hour", hour);
  //   console.log("minute", minute);
  // };

  return (
    <div className="flex h-full flex-col">
      <Header />
      <div
        ref={container}
        className="isolate flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full "
        >
          <DayColumHeader containerNav={containerNav} />
          <div className="cal-container flex flex-auto ">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div
              className="grid flex-auto grid-cols-1 grid-rows-1"
              // onClick={handleClick}
            >
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
              >
                <div
                  ref={containerOffset}
                  className="top-margin row-end-1 h-7"
                ></div>
                {hoursOfDay.map((hour) => (
                  <HourLabel key={hour} hourOfDay={hour} />
                ))}
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full" />
                <div className="col-start-7 row-span-full" />
                <div className="right-margin col-start-8 row-span-full w-8" />
              </div>

              {/* Events */}
              <Events />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
