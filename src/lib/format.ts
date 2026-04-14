export const BHD = (amount: number) =>
  new Intl.NumberFormat("en-BH", {
    style: "currency",
    currency: "BHD",
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(amount);

export const bhdShort = (amount: number) => `BHD ${amount.toFixed(3)}`;
