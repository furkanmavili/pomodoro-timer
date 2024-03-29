export function printableTime(count) {
  let minute = Math.floor(count / 60);
  let second = Math.floor(count % 60);
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return `${minute}:${second}`;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}