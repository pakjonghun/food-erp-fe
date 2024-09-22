export function numberFormat(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}

export function percentFormat(number: number) {
  return `${Math.floor(number * 10000) / 100}%`;
}
