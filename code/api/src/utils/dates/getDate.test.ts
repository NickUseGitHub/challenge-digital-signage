import getDate, { GetDateParams } from './getDate'

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

describe('utils/getDate', () => {
  test('should get exacly month', () => {
    dateTestList.forEach(function (dateTest) {
      const date = getDate(dateTest)

      expect(date.getDate()).toBe(dateTest.date)
    })
  })

  test('should get exacly month', () => {
    dateTestList.forEach(function (dateTest) {
      const date = getDate(dateTest)

      expect(date.getMonth()).toBe(dateTest.month - 1)
    })
  })

  test('should get exacly year', () => {
    dateTestList.forEach(function (dateTest) {
      const date = getDate(dateTest)

      expect(String(date.getFullYear())).toBe(dateTest.year)
    })
  })
})
