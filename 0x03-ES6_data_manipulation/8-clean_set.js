export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  return [...set]
    .filter((item) => (item ? item.startsWith(startString) : ''))
    .map((item) => (item ? item.slice(startString.length) : ''))
    .join('-');
}
