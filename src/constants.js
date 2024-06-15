// prettier-ignore
export const FUEL_BRANDS = {
  "ДТ": "ДТ",
  "АИ-92": "АИ-92",
  "АИ-95": "АИ-95",
  "АИ-100": "АИ-100",
};

export const PRODUCT_VARIANTS = {
  COMMON: {
    volume: 250,
    price: 500,
  },

  LARGE: {
    volume: 500,
    price: 900,
  },
};

export const COST_REDUCTION = 15;

export const API_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : "/api";
