/**
 * A wrapper that generates a label from a tax object that includes rate and jurisdiction.
 * @param {Object} tax - A tax object
 * @returns {String} Formatted string such as "Tax (US, NY, 10242) 8.88%".
 */
export default function taxLabel(tax) {
  const { country, postal, region, taxName: name, taxRate } = tax;
  const { percent: rate } = taxRate;
  let label = "";
  if (country) {
    label = `(${country}`;
    if (region) {
      label += `, ${region}`;
    }
    if (postal) {
      label += `, ${postal}`;
    }
    label += ") ";
  } else if (name) {
    label = `(${name}) `;
  }
  return `Tax ${label}${rate.toLocaleString()}%`;
}
