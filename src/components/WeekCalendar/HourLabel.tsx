const HourLabel = ({ hourOfDay }: { hourOfDay: string }) => {
  return (
    <>
      <div>
        <div className="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
          {hourOfDay}
        </div>
      </div>
      <div />
    </>
  );
};
export default HourLabel;
