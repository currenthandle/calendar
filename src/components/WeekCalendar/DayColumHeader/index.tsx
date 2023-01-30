import type { RefObject } from "react";
import Narrow from "./Narrow";
import Wide from "./Wide";

const DayColumHeader = ({
  containerNav,
}: {
  containerNav: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={containerNav}
      // className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 "
      className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
    >
      <Narrow />
      <Wide />
    </div>
  );
};
export default DayColumHeader;
