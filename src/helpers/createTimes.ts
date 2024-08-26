import { IConvert } from "../interface/easyInterfaces";

export const generateTimes = (stampToday: number, stampDate: number): IConvert => {
  const seconds = Math.floor((stampToday - stampDate) / 1000);
  const minutes = Math.floor((stampToday - stampDate) / (1000 * 60));
  const hours = Math.floor((stampToday - stampDate) / (1000 * 60 * 60));
  const days = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(
    (stampToday - stampDate) / (1000 * 60 * 60 * 24 * 7)
  );
  const months = Math.floor(
    (stampToday - stampDate) / (1000 * 60 * 60 * 24 * 30)
  );
  const years = Math.floor(
    (stampToday - stampDate) / (1000 * 60 * 60 * 24 * 365)
  );

  return { seconds, minutes, hours, days, weeks, months, years };
};
