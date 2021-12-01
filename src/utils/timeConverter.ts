export const secondsToMinutes = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const time = date.toISOString().substr(14, 5);
  return time;
};
export const secondsToWholeMinutes = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const time = parseInt(date.toISOString().substr(15, 1));
  return time;
};
export const minutesToSeconds = (minutes: number) => {
  const seconds = minutes * 60;
  return seconds;
};
