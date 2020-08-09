export default function getTimestamp(date: Date): number | null {
  if (
    isNaN((date as unknown) as number) ||
    !date ||
    typeof date.getTime !== 'function'
  )
    return null

  return date.getTime()
}
