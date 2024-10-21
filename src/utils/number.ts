export const formatNumberWithCommas = (number: number): string => {
  return new Intl.NumberFormat('en-US').format(number)
}

export const roundToTwoDecimalsString = (number: number): string => {
  return number.toFixed(2)
}
