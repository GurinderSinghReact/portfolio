import moment from "moment";

function ms(t) {
  let year, month, day, hour, minute, second;

  second = Math.floor(t / 1000);
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  day = day % 30;
  year = Math.floor(month / 12);
  month = month % 12;

  return { year, month, day, hour, minute, second };
}

export const getDuration = (firstDuration, secondDuration) => {
  var a = moment(firstDuration);
  var b = moment(secondDuration);
  var difference = ms(a.diff(b));
  if (difference.year > 0) {
    difference = difference.year + " yrs";
  } else if (difference.month > 0) {
    difference = difference.month + " mos";
  } else {
    difference = difference.day + " days";
  }
  return difference;
};
