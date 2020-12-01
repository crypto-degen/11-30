const toUSD = (n: number) => {
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const FormatUtil = {
  toUSD,
}