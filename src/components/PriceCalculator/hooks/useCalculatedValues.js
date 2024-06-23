import { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import {
  CONSUMPTION_REDUCTION,
  FUEL_BRANDS,
  PRODUCT_VARIANTS,
} from "@/constants";
import { formatNumber as applyNumberFormatters } from "@/utils";

const formatNumber = (n) =>
  n > 0 ? applyNumberFormatters(Math.round(n)) : "—";

export const useCalculatedValues = () => {
  const formik = useFormik({
    initialValues: {
      /// Input values
      tank_volume: undefined,
      fuel_brand: FUEL_BRANDS["ДТ"],
      average_consumption: undefined,
      fuel_price: undefined,
      average_mileage_per_month: undefined,
      // Calculated values
      full_charge_price: 0,
      full_charge_discount: 0,
      mileage_per_hundred_kilometers_discount: 0,
      per_product_discount: 0,
      per_month_during_product_usage_discount: 0,
      amount_of_common_product_packs: 1,
    },
    onSubmit: () => null,
  });

  const {
    tank_volume,
    fuel_brand,
    fuel_price,
    full_charge_price,
    full_charge_discount,
    average_consumption,
    amount_of_common_product_packs,
    average_mileage_per_month,
    mileage_per_hundred_kilometers_discount,
    per_product_discount,
    per_month_during_product_usage_discount,
  } = formik.values;

  const { setFieldValue, resetForm } = formik;

  useEffect(() => {
    if (tank_volume !== undefined && fuel_price !== undefined) {
      setFieldValue("full_charge_price", tank_volume * fuel_price);
    }
  }, [tank_volume, fuel_price, setFieldValue]);

  useEffect(() => {
    if (tank_volume !== undefined) {
      const productVolume = PRODUCT_VARIANTS["COMMON"]["volume"];

      setFieldValue(
        "amount_of_common_product_packs",
        Math.ceil(tank_volume / productVolume),
      );
    }
  }, [tank_volume, setFieldValue]);

  useEffect(() => {
    if (full_charge_price !== undefined && tank_volume !== undefined) {
      const productHalfDiscount = PRODUCT_VARIANTS["COMMON"]["price"] / 2;
      const productVolume = PRODUCT_VARIANTS["COMMON"]["volume"];

      setFieldValue(
        "full_charge_discount",
        (full_charge_price * CONSUMPTION_REDUCTION) / 100 -
          (tank_volume * productHalfDiscount) / productVolume,
      );
    }
  }, [full_charge_price, tank_volume, setFieldValue]);

  useEffect(() => {
    if (average_consumption !== undefined && fuel_price !== undefined) {
      const productHalfDiscount = PRODUCT_VARIANTS["COMMON"]["price"] / 2;
      const productVolume = PRODUCT_VARIANTS["COMMON"]["volume"];

      setFieldValue(
        "mileage_per_hundred_kilometers_discount",
        (average_consumption * fuel_price * CONSUMPTION_REDUCTION) / 100 -
          (average_consumption * productHalfDiscount) / productVolume,
      );
    }
  }, [average_consumption, fuel_price, setFieldValue]);

  useEffect(() => {
    if (
      amount_of_common_product_packs !== undefined &&
      fuel_price !== undefined
    ) {
      const productHalfDiscount = PRODUCT_VARIANTS["COMMON"]["price"] / 2;

      setFieldValue(
        "per_product_discount",
        ((amount_of_common_product_packs *
          productHalfDiscount *
          CONSUMPTION_REDUCTION) /
          100) *
          fuel_price -
          amount_of_common_product_packs * productHalfDiscount,
      );
    }
  }, [amount_of_common_product_packs, fuel_price, setFieldValue]);

  useEffect(() => {
    if (
      average_mileage_per_month !== undefined &&
      mileage_per_hundred_kilometers_discount !== undefined
    ) {
      setFieldValue(
        "per_month_during_product_usage_discount",
        (average_mileage_per_month / 100) *
          mileage_per_hundred_kilometers_discount,
      );
    }
  }, [
    average_mileage_per_month,
    mileage_per_hundred_kilometers_discount,
    setFieldValue,
  ]);

  const product_dosage = useMemo(() => {
    if (isNaN(tank_volume)) return "—";
    if (tank_volume <= 0) return "—";
    return `${tank_volume} - ${tank_volume * 2}`;
  }, [tank_volume]);

  const handleInputChange = (field) => (evt) => {
    const { value } = evt.target;

    if (evt.target?.validity?.valid)
      setFieldValue(
        field,
        !isNaN(value) && value !== "" ? Number(value) : undefined,
      );
  };

  const handleSelectInputChange = (evt) => {
    const { value } = evt.target;

    setFieldValue("fuel_brand", value);
  };

  return {
    values: {
      tank_volume,
      fuel_brand,
      fuel_price,
      full_charge_price: formatNumber(full_charge_price),
      full_charge_discount: formatNumber(full_charge_discount),
      product_dosage,
      average_consumption,
      amount_of_common_product_packs,
      average_mileage_per_month,
      mileage_per_hundred_kilometers_discount: formatNumber(
        mileage_per_hundred_kilometers_discount,
      ),
      per_product_discount: formatNumber(per_product_discount),
      per_month_during_product_usage_discount: formatNumber(
        per_month_during_product_usage_discount,
      ),
    },
    handleInputChange,
    handleSelectInputChange,
    resetForm,
  };
};
