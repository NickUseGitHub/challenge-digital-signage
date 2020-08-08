export default function getTimestamp(date: Date): number | null {
  if (isNaN((date as unknown) as number)) return null

  return date.getTime()
}
