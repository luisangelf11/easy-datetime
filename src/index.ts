import { generateFormatEng, generateFormatEsp } from "./helpers/createFormat";
import { generateTimes } from "./helpers/createTimes";
import { IStructureDateTime } from "./interface/easyInterfaces";

//This function return a date in string format
type formatType = "short" | "long"; //Type format return

export const getEasyDate = (
  date: Date,
  format: formatType = "short",
  lang: langType = "ENG"
): string => {
  const mount = date.getMonth() + 1;
  const fullyear = date.getFullYear();
  const days = date.getDate();
  if (format === "short") {
    return `${fullyear}/${mount <= 9 ? `0${mount}` : mount}/${
      days <= 9 ? `0${days}` : days
    }`;
  } else {
    const weekday = `${date.toLocaleDateString(lang, { weekday: "long" })}`;
    const months = `${date.toLocaleDateString(lang, { month: "long" })}`;
    const day = `${date.toLocaleDateString(lang, { day: "2-digit" })}`;
    return `${weekday} ${day} ${
      lang === "ESP" ? "de " : ""
    }${months}`.toLowerCase();
  }
};

//This fuction return a time in string format
export const getEasyTime = (date: Date): string => {
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${hours <= 9 ? `0${hours}` : hours}:${min <= 9 ? `0${min}` : min}:${
    sec <= 9 ? `0${sec}` : sec
  }${hours >= 12 ? "PM" : "AM"}`;
};

//This function return a format datetime like posts social media
type langType = "ESP" | "ENG";

export const getEasyFormat = (
  date: Date,
  lang: langType = "ENG"
): string | undefined => {
  const today = new Date();
  //Get timeStamp
  const stampToday = today.getTime();
  const stampDate = date.getTime();
  //Get seconds, minutes, hours, days, weeks, mounths, years
  const { seconds, minutes, hours, days, weeks, months, years } = generateTimes(
    stampToday,
    stampDate
  );
  //Validate format
  if (lang === "ENG")
    return generateFormatEng({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      months,
      years,
    });
  else
    return generateFormatEsp({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      months,
      years,
    });
};

//This function return a objetct with the structure of the datetime
export const getEasyDateTimeStructure = (date: Date): IStructureDateTime => {
  const today = new Date();
  //Get timeStamp
  const stampToday = today.getTime();
  const stampDate = date.getTime();
  //Get seconds, minutes, hours, days, weeks, mounths, years
  const { seconds, minutes, hours, days, weeks, months, years } = generateTimes(
    stampToday,
    stampDate
  );
  return {
    datetime: date,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  };
};
