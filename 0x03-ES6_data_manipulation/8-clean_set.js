export default function cleanSet(set, startString) {
  let res = "";
  if (!startString || !startString.length) return res;

  [...set].map((item) => {
    if (item && item.startsWith(startString)) {
      res += `${item.slice(startString.length)}`;
    }
  });
  return res.slice(0, res.length - 1);
}
