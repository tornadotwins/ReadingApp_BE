export const convertNumber2Date = (numDate: number) => {
  const date = new Date(numDate * 1000);
  return date.getTime();
}