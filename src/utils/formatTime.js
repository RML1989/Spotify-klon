export const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const rest = (seconds % 60).toFixed(0);
  const restSeconds = rest < 10 ? `0${rest}` : rest;

  return `${min}:${restSeconds}`;
};
