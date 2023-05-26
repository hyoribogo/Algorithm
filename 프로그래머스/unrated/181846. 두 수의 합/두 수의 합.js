function solution(a, b) {
  let carry = 0
  let result = ''
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (+a[i] || 0) + (+b[j] || 0) + carry
    carry = Math.floor(sum / 10)
    result = (sum % 10) + result

    i--
    j--
  }

  return result
}