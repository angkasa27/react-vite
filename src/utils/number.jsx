export function convertToRupiah(angka, useDecimal = false) {
  if (!angka) {
    return 'Rp -'
  }
  let rupiah = ''
  let angkarev = angka.toString().split('').reverse().join('')
  for (let i = 0; i < angkarev.length; i++)
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
  return (
    'Rp' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('') +
    `${useDecimal ? ',00' : ''}`
  )
}

export const parseToNumber = (value) => {
  value = +value
  if (isNaN(value)) return null
  return value
}
