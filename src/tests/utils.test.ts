import { readableDateTime } from '../utils.ts'

describe(`readableDateTime`, () => {
  test('should return a well formatted date/time string', () => {
    expect(readableDateTime('2023-11-06T17:12:04.790Z')).toBe(
      '17:12 on 06/11/2023'
    )
    expect(readableDateTime('1999-05-30T06:59:34.790Z')).toBe(
      '07:59 on 30/05/1999'
    )
  })
})
