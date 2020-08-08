export default function isDateInRange(
  startTime: number,
  endTime: number,
  target: number,
): boolean {
  return startTime < target && endTime > target
}
