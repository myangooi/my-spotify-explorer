import { TimeRange } from "@/app/components/Button/GetTopItems";

export function timeRangeDisplayString(
  timeRange: TimeRange | null
): string | null {
  return timeRange === "short_term"
    ? "Last month"
    : timeRange === "medium_term"
    ? "Last 6 months"
    : timeRange === "long_term"
    ? "Last year"
    : null;
}
