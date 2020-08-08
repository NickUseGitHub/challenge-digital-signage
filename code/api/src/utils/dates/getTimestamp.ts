export default function getTimestamp(date: Date): number | null {
  console.log('getTimestamp date', date)

  if (isNaN((date as unknown) as number)) return null

  return date.getTime()
}
