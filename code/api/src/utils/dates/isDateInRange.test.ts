import getDate, { GetDateParams } from './getDate'
import getTimeRange from './getTimeRange'
import getTimestamp from './getTimestamp'
import isDateInRange from './isDateInRange'

const currentDate = new Date()
const dateTestList: GetDateParams[] = [
  {
    date: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: String(currentDate.getFullYear()),
    hour: '18',
    minute: '00',
  },
  {
    date: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: String(currentDate.getFullYear()),
    hour: '18',
    minute: '59',
    second: '59',
  },
  {
    date: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: String(currentDate.getFullYear()),
    hour: '17',
    minute: '00',
    second: '01',
  },
]

describe('utils/getTimeRange', () => {
  describe('all test date should be in be in range time', () => {
    test('all dates should between 17:00 - 19:00', () => {
      const { startTime, endTime } = getTimeRange('17:00', '19:00')

      dateTestList.forEach((dateTest) => {
        const dateToTest = getTimestamp(getDate(dateTest))

        expect(isDateInRange(startTime, endTime, dateToTest)).toBeTruthy()
      })
    })
  })

  describe('all test date should "NOT" be in be in range time', () => {
    test('all dates should between 17:00 - 19:00', () => {
      const { startTime, endTime } = getTimeRange('20:00', '22:00')

      dateTestList.forEach((dateTest) => {
        const dateToTest = getTimestamp(getDate(dateTest))

        expect(isDateInRange(startTime, endTime, dateToTest)).toBeFalsy()
      })
    })
  })
})
