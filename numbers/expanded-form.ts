import Assert from "../assert";
const test = new Assert();

function expandedForm(num): string {
  return Array.from(String(num))
    .map((val, i, arr) => {
      const last = arr.length - 1;
      if (Number(val) > 0) {
        return `${val}${"0".repeat(last - i)}`;
      }
    })
    .filter(Boolean)
    .join(" + ");
}

test.assert(expandedForm(70304), "70000 + 300 + 4"); //?
