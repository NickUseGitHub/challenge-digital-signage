export interface GetDateParams {
  date: number
  month: number
  year: string
  hour?: string
  minute?: string
  second?: string
}

export default function getDate({
  date,
  month,
  year,
  hour,
  minute,
  second,
}: GetDateParams): Date {
  return new Date(
    `${month}/${date}/${year} ${hour || '00'}:${minute || '00'}:${
      second || '00'
    }`,
  )
}
