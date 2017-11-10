/**
 * @param {number} num - number you want to zero padding in
 * @param {number} digit - include digit number of zero padding
 * @return {string}
 */
export default (num, digit) => {
  if (typeof num !== 'number') num = parseFloat(num)

  const sign = num >= 0 ? '' : '-'
  num = Math.abs(num)

  const digitNumber = num > 0 ? Math.floor(Math.log(num) * Math.LOG10E + 1) : 1

  let zero = ''
  for (let i = 0, iLen = digit - digitNumber; i < iLen; i++) {
    zero += '0'
  }

  return sign + zero + num
}