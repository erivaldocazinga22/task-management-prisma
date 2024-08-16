import { addDays, addWeeks, addMonths, addYears } from "date-fns";

type TimeUnit = "days" | "weeks" | "months" | "years";

interface ExpirationOptions {
  amount: number;
  unit: TimeUnit;
}

export const ExpirationDate = ({ amount, unit }: ExpirationOptions): Date => {
  const now = new Date();

  switch (unit) {
    case "days":
      return addDays(now, amount);
    case "weeks":
      return addWeeks(now, amount);
    case "months":
      return addMonths(now, amount);
    case "years":
      return addYears(now, amount);
    default:
      throw new Error("Invalid time unit");
  }
};
