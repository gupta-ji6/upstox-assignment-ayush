const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
});

export const currencyFormatter = (data: number | bigint) =>
  formatter.format(data);
