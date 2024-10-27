export const convertNumber2Date = (timestamp: number) => {
  const date = new Date(timestamp);
  
  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
  const day = date.getDate();

  // Format the date as "year.month.day"
  return `${month}/${day}/${year}`;
}