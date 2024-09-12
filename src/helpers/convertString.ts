import { EMPTY_STRING } from "@/constants/string-constants";

export const getEmptyString = (inputString?: string) =>
  inputString || EMPTY_STRING;
