import { LANGUAGE_CODE_TABLE } from "@/config";

export const convertNumber2Date = (timestamp: number) => {
  const date = new Date(timestamp);
  
  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
  const day = date.getDate();

  // Format the date as "year.month.day"
  return `${month}/${day}/${year}`;
}

export const findDuplicatedString = (arr: string[]) => {
  const res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                res.push(arr[i]);
            }
        }
    }
    return res;
}

export const getLanguageFromLanguageCode = (languageCode: string) => {
  const languageObj = LANGUAGE_CODE_TABLE.find((languageObj) => languageObj.code == languageCode);

  return languageObj?.language || 'English';
}

export const getLanguageCodeFromLanguage = (language: string) => {
  const languageObj = LANGUAGE_CODE_TABLE.find((languageObj) => languageObj.language == language);

  return languageObj?.code || 'en';
}