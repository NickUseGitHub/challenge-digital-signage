import getDate, { GetDateParams } from './getDate'
import getTimestamp from './getTimestamp'

const dateTestList: GetDateParams[] = [
  {
    date: 8,
    month: 8,
    year: '2020',
    hour: '13',
    minute: '20',
    second: '10',
  },
  {
    date: 9,
    month: 8,
    year: '2020',
    hour: '13',
    minute: '20',
    second: '10',
  },
  {
    date: 10,
    month: 7,
    year: '1998',
  },
  {
    date: 9,
    month: 10,
    year: '2000',
  },
]

describe('utils/getTimestamp', () => {
  test('should get timestamp correct format number', () => {
    dateTestList.forEach((dateTest) => {
      expect(typeof getTimestamp(getDate(dateTest))).toBe('number')
    })
  })

  test('should get all null', () => {
    ;['Invalid Date', new Date('99/99/9999'), null, undefined].forEach(
      (dateTest) => {
        expect(typeof getTimestamp((dateTest as unknown) as Date)).not.toBe(
          'number',
        )
      },
    )
  })
})
