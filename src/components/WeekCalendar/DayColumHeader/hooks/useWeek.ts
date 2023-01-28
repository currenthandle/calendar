import { useEffect, useState } from "react";
import dayjs from "dayjs";

type Week = {
  currentDay: string[];
  daysOfWeek: string[][];
};

export default function useWeek(): Week {
  const [week, setWeek] = useState<Week>({
    currentDay: [],
    daysOfWeek: [],
  });

  useEffect(() => {
    const currentDay = dayjs().format("dddd D").split(" ");

    const getDatesOfWeek = () => {
      const daysOfWeek = [];
      for (let i = 0; i < 7; i++) {
        daysOfWeek.push(dayjs().day(i).format("ddd D").split(" "));
      }
      return daysOfWeek;
    };
    const daysOfWeek = getDatesOfWeek();

    setWeek({ currentDay, daysOfWeek });
  }, []);

  return week;
}
