// const formatters = [
//   {value: 1e18, symbol: "E"},
//   {value: 1e15, symbol: "P"},
//   {value: 1e12, symbol: "T"},
//   {value: 1e9, symbol: "G"},
//   {value: 1e6, symbol: "M"},
//   // {value: 1e4, divisor: 1e3, symbol: "k"},
// ];

const formatters = [
  {
    value: 1e18,
    symbol: "E",
    suffixElement: (
      <>
        10<sup>18</sup>
      </>
    ),
  },
  {
    value: 1e15,
    symbol: "P",
    suffixElement: (
      <>
        10<sup>15</sup>
      </>
    ),
  },
  {
    value: 1e12,
    symbol: "T",
    suffixElement: (
      <>
        10<sup>12</sup>
      </>
    ),
  },
  {
    value: 1e9,
    symbol: "G",
    suffixElement: (
      <>
        10<sup>9</sup>
      </>
    ),
  },
  {
    value: 1e6,
    symbol: "M",
    suffixElement: (
      <>
        10<sup>6</sup>
      </>
    ),
  },
  // {value: 1e4, divisor: 1e3, symbol: "k"},
];

export const formatNumber = (input) => {
  if (typeof input !== "number" || isNaN(input)) return <>0</>;

  for (const formatter of formatters) {
    const { value, divisor = value, suffixElement } = formatter;

    if (Math.abs(input) >= value) {
      return (
        <>
          {Math.round(input / divisor)} * {suffixElement}
        </>
      );
    }
  }

  return <>{String(input)}</>;
};
