export type DateInfo = {
  date: string;
  time: string;
  year: number;
  month: number;
  day: number;
};

/**.
 * @param isoString
 * @param useLocalTime
 */
export function parseDateTime(
  isoString: string,
  useLocalTime: boolean = false
): DateInfo {
  const dateObj = new Date(isoString);

  const year = useLocalTime ? dateObj.getFullYear() : dateObj.getUTCFullYear();
  const month = (useLocalTime ? dateObj.getMonth() : dateObj.getUTCMonth()) + 1;
  const day = useLocalTime ? dateObj.getDate() : dateObj.getUTCDate();

  const hours = String(
    useLocalTime ? dateObj.getHours() : dateObj.getUTCHours()
  ).padStart(2, "0");
  const minutes = String(
    useLocalTime ? dateObj.getMinutes() : dateObj.getUTCMinutes()
  ).padStart(2, "0");
  const seconds = String(
    useLocalTime ? dateObj.getSeconds() : dateObj.getUTCSeconds()
  ).padStart(2, "0");

  return {
    date: `${String(day).padStart(2, "0")}/${String(month).padStart(
      2,
      "0"
    )}/${year}`,
    time: `${hours}:${minutes}:${seconds}`,
    year,
    month,
    day,
  };
}
