import { generateFormatEng, generateFormatEsp } from "../helpers/createFormat";
import { generateTimes } from "../helpers/createTimes";
import { IStructureDateTime } from "../interface/easyInterfaces";

//This function return a date in format string
type formatType = "short" | "long"; //Type format return

export const getEasyDate = (
  date: Date,
  format: formatType = "short"
): string => {
  const mount = date.getMonth();
  const fullyear = date.getFullYear();
  const days = date.getDate();
  if (format === "short") {
    return `${fullyear}/${mount <= 9 ? `0${mount}` : mount}/${
      days <= 9 ? `0${days}` : days
    }`;
  } else {
    return `${date.toDateString()}`;
  }
};

//This fuction return a time in format string
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
  const {seconds, minutes, hours, days, weeks, mounths, years} = generateTimes(stampToday, stampDate)
  //Validate format
  if (lang === "ENG")
    return generateFormatEng({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      mounths,
      years,
    });
  else
    return generateFormatEsp({
      seconds,
      minutes,
      hours,
      days,
      weeks,
      mounths,
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
 const {seconds, minutes, hours, days, weeks, mounths, years} = generateTimes(stampToday, stampDate)
  return {
    datetime: date,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    mounths,
    years,
  };
};
