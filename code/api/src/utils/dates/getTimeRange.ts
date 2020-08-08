import getDate from './getDate'
import { Schedule } from 'modules/campaign/types'
import getTimestamp from './getTimestamp'

// time format should be HH:mm
export default function getTimeRange(
  startTime: string,
  endTime: string,
): null | Schedule {
  if (!startTime || !endTime) return null

  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = String(currentDate.getFullYear())

  const [startHour, startMinute] = startTime.split(':')
  const [endHour, endMinute] = endTime.split(':')

  return {
    startTime: getTimestamp(
      getDate({
        date,
        month,
        year,
        hour: startHour,
        minute: startMinute,
      }),
    ),
    endTime: getTimestamp(
      getDate({
        date,
        month,
        year,
        hour: endHour,
        minute: endMinute,
      }),
    ),
  }
}
