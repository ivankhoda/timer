export const secondsToMinutes = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  const time = date.toISOString().substr(14, 5);
  return time;
};
