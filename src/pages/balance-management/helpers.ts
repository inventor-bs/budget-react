import { EMPTY_STRING } from "@/constants/string-constants";

const MAX_DECIMAL_PLACES = 3;
const MIN_DECIMAL_PLACES = 0;
const LOCAL = "en-US";

export const formatCurrency = (value?: string) =>
  !value || isNaN(Number(value))
    ? EMPTY_STRING
    : `$${Number(value).toLocaleString(LOCAL, { maximumFractionDigits: MAX_DECIMAL_PLACES, minimumFractionDigits: MIN_DECIMAL_PLACES })}`;
