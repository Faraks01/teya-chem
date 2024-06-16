import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Box, Stack } from "@mui/system";
import styled from "@emotion/styled/macro";
import Modal from "@mui/base/Modal";
import { TextInput, Select } from "@/components";
import { useFormik } from "formik";
import { COST_REDUCTION, FUEL_BRANDS, PRODUCT_VARIANTS } from "@/constants";
import wavesSeparatorVector from "@/assets/vectors/waves_separator.svg";
import { formatNumber } from "@/utils";

export const PriceCalculatorContext = createContext({
  dialogOpen: false,
  changeDialogState: (_) => {},
});

export const PriceCalculatorContextWrapper = ({ children }) => {
  const [dialogOpen, changeDialogState] = useState(false);

  return (
    <PriceCalculatorContext.Provider value={{ dialogOpen, changeDialogState }}>
      {Children.map(children, (child) => cloneElement(child))}
    </PriceCalculatorContext.Provider>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={`${className} ${open && "MuiBackdrop-open"}`}
      ref={ref}
      {...other}
    />
  );
});

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const PriceCalculator = () => {
  const { dialogOpen, changeDialogState } = useContext(PriceCalculatorContext);

  const closeDialog = () => changeDialogState(false);

  const formik = useFormik({
    initialValues: {
      tank_volume: 100,
      fuel_brand: FUEL_BRANDS["ДТ"],
      average_consumption: 10,
      fuel_price: 50,
      average_mileage_per_month: 2000,
      full_charge_price: 5000,
      full_charge_discount: 650,
      mileage_per_hundred_kilometers_discount: 65,
      per_product_discount: 1625,
      per_month_during_product_usage_discount: 1300,
      amount_of_common_product_packs: 1,
      amount_of_large_product_packs: 0,
    },
    onSubmit: () => null,
  });

  const {
    tank_volume,
    fuel_price,
    full_charge_price,
    average_consumption,
    amount_of_common_product_packs,
    amount_of_large_product_packs,
    average_mileage_per_month,
    mileage_per_hundred_kilometers_discount,
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
    if (tank_volume !== undefined) {
      const productVolume = PRODUCT_VARIANTS["LARGE"]["volume"];

      setFieldValue(
        "amount_of_large_product_packs",
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
        (full_charge_price * COST_REDUCTION) / 100 -
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
        (average_consumption * fuel_price * COST_REDUCTION) / 100 -
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
          COST_REDUCTION) /
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

  useEffect(() => {
    if (!dialogOpen) {
      resetForm();
    }
  }, [dialogOpen, resetForm]);

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

  const suggestLargeBottle =
    amount_of_large_product_packs > 0 &&
    amount_of_large_product_packs < amount_of_common_product_packs;

  const packsTitle = useMemo(() => {
    const pack_amount = suggestLargeBottle
      ? amount_of_large_product_packs
      : amount_of_common_product_packs;

    const strPackAmount = String(pack_amount);
    const strPackLastSymbol = strPackAmount[strPackAmount.length - 1];

    let packs;

    if (strPackLastSymbol === "1") {
      packs = "флакон";
    } else if (
      strPackLastSymbol === "2" ||
      strPackLastSymbol === "3" ||
      strPackLastSymbol === "4"
    ) {
      packs = "флакона";
    } else {
      packs = "флаконов";
    }

    return `х ${pack_amount} ${packs}`;
  }, [
    amount_of_large_product_packs,
    amount_of_common_product_packs,
    suggestLargeBottle,
  ]);

  return (
    <Box>
      <StyledModal
        open={dialogOpen}
        onClose={closeDialog}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box
          overflow="auto"
          display="flex"
          flexDirection="column"
          maxWidth={1285}
          height={{ xs: "calc(100% - 70px)", md: 630 }}
          width={{ xs: "calc(100% - 40px)", md: "100%" }}
          borderRadius="22px"
          backgroundColor="colors.white"
          pt="28px"
          pb="28px"
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box
            ml={{ xs: 0, md: "41px" }}
            component="span"
            fontFamily="RoadRadio"
            fontWeight={400}
            fontSize={30}
            color="colors.nero"
            width={{ xs: "250px", md: "auto" }}
          >
            Калькулятор расчёта
          </Box>

          <Stack
            mt="36px"
            ml={{ xs: 0, md: "41px" }}
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing="25px"
          >
            <TextInput
              id="tank_volume"
              name="tank_volume"
              label="Объем бака (л)"
              inputWidth="211px"
              variant="secondary"
              placeholder="Объем бака (л)"
              type="number"
              min={0}
              max={99999999}
              onChange={handleInputChange("tank_volume")}
              value={formik.values.tank_volume}
            />

            <Select
              id="fuel_brand"
              name="fuel_brand"
              label="Марка топлива"
              selectWidth="211px"
              placeholder="Марка топлива"
              options={Object.entries(FUEL_BRANDS).map((e) => ({
                label: e[0],
                value: e[1],
              }))}
              onChange={handleSelectInputChange}
              value={formik.values.fuel_brand}
              disabled
            />

            <TextInput
              id="average_consumption"
              name="average_consumption"
              label="Средний расход (л/100 км)"
              inputWidth="211px"
              variant="secondary"
              placeholder="Средний расход"
              type="number"
              min={0}
              max={99999999}
              onChange={handleInputChange("average_consumption")}
              value={formik.values.average_consumption}
            />

            <TextInput
              id="fuel_price"
              name="fuel_price"
              label="Цена запр.топлива (руб/л)"
              inputWidth="211px"
              variant="secondary"
              placeholder="Цена топлива"
              type="number"
              min={0}
              max={99999999}
              onChange={handleInputChange("fuel_price")}
              value={formik.values.fuel_price}
            />

            <TextInput
              id="average_mileage_per_month"
              name="average_mileage_per_month"
              label="Средний пробег в мес. (км)"
              inputWidth="211px"
              variant="secondary"
              placeholder="Средний пробег"
              type="number"
              min={0}
              max={99999999}
              onChange={handleInputChange("average_mileage_per_month")}
              value={formik.values.average_mileage_per_month}
            />
          </Stack>

          <Stack
            mt="21px"
            ml={{ xs: 0, md: "41px" }}
            direction={{ xs: "column", md: "row" }}
            spacing="16px"
            alignItems="center"
            width={{ xs: "250px", md: "auto" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontWeight={400}
              fontSize={22}
              color="colors.nero"
            >
              Стоимость одной полной заправки:
            </Box>

            <Box
              borderRadius="12px"
              display="flex"
              minWidth={193}
              width="fit-content"
              height={53}
              pl="10px"
              pr="10px"
              backgroundColor="colors.whiteSmoke"
            >
              <Box
                m="auto"
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={35}
                color="colors.blurple"
              >
                {formatNumber(Math.round(formik.values.full_charge_price))} руб
              </Box>
            </Box>
          </Stack>

          <Box
            position="relative"
            mt="24px"
            width="100%"
            height="15px"
            flexShrink={0}
            sx={{ background: `url('${wavesSeparatorVector}')` }}
          />

          <Stack
            mt="39px"
            ml={{ xs: 0, md: "41px" }}
            direction={{ xs: "column", md: "row" }}
            spacing="51px"
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              spacing="13px"
            >
              <Box
                borderRadius="12px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minWidth={211}
                width="fit-content"
                pl={1}
                pr={1}
                height={148}
                backgroundColor="colors.whiteSmoke"
              >
                <Box
                  mt="16px"
                  component="span"
                  fontWeight={500}
                  fontSize={15}
                  color="colors.nero"
                  textAlign="center"
                >
                  Подходящая присадка
                </Box>

                <Box
                  mt="12px"
                  component="span"
                  fontFamily="RoadRadio"
                  fontWeight={400}
                  fontSize={35}
                  color="colors.blurple"
                  textAlign="center"
                >
                  ТЭЯ-ДТ
                </Box>

                <Box
                  mt="12px"
                  display="flex"
                  minWidth={129}
                  width="fit-content"
                  height={37}
                  borderRadius="12px"
                  backgroundColor="colors.blurple"
                >
                  <Box
                    m="auto"
                    pl={1}
                    pr={1}
                    component="span"
                    fontWeight={500}
                    fontSize={16}
                    color="colors.white"
                    textAlign="center"
                  >
                    {packsTitle}
                  </Box>
                </Box>
              </Box>

              <Box
                borderRadius="12px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                minWidth={211}
                width="fit-content"
                pl={1}
                pr={1}
                height={148}
                backgroundColor="colors.whiteSmoke"
              >
                <Box
                  mt="16px"
                  component="span"
                  fontWeight={500}
                  fontSize={15}
                  color="colors.nero"
                  textAlign="center"
                >
                  Необходимая дозировка
                </Box>

                <Box
                  mt="12px"
                  component="span"
                  fontFamily="RoadRadio"
                  fontWeight={400}
                  fontSize={35}
                  color="colors.blurple"
                  textAlign="center"
                >
                  {suggestLargeBottle && "x2 мл"}
                  {!suggestLargeBottle && "x1 мл"}
                </Box>

                <Box
                  mt="12px"
                  component="span"
                  fontWeight={500}
                  fontSize={14}
                  color="colors.gray33"
                  textAlign="center"
                >
                  *дозировка на 1 заправку <br />
                  полного бака
                </Box>
              </Box>
            </Stack>

            <Stack spacing="24px" direction="column">
              <Box
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={22}
                color="colors.nero"
              >
                Ваша экономия:
              </Box>

              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "center", md: "flex-start" }}
                spacing="30px"
              >
                <Box
                  borderRadius="12px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  minWidth={211}
                  width="fit-content"
                  pl={1}
                  pr={1}
                  height={102}
                  backgroundColor="colors.whiteSmoke"
                >
                  <Box
                    mt="16px"
                    component="span"
                    fontWeight={500}
                    fontSize={15}
                    color="colors.nero"
                    textAlign="center"
                  >
                    С каждой заправки
                  </Box>

                  <Box
                    mt="12px"
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={400}
                    fontSize={35}
                    color="colors.blurple"
                    textAlign="center"
                  >
                    {formatNumber(
                      Math.round(formik.values.full_charge_discount),
                    )}{" "}
                    руб
                  </Box>
                </Box>

                <Box
                  borderRadius="12px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  minWidth={211}
                  width="fit-content"
                  pl={1}
                  pr={1}
                  height={102}
                  backgroundColor="colors.whiteSmoke"
                >
                  <Box
                    mt="16px"
                    component="span"
                    fontWeight={500}
                    fontSize={15}
                    color="colors.nero"
                    textAlign="center"
                  >
                    На 100 км
                  </Box>

                  <Box
                    mt="12px"
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={400}
                    fontSize={35}
                    color="colors.blurple"
                    textAlign="center"
                  >
                    {formatNumber(
                      Math.round(
                        formik.values.mileage_per_hundred_kilometers_discount,
                      ),
                    )}{" "}
                    руб
                  </Box>
                </Box>

                <Box
                  borderRadius="12px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  minWidth={211}
                  width="fit-content"
                  pl={1}
                  pr={1}
                  height={102}
                  backgroundColor="colors.whiteSmoke"
                >
                  <Box
                    mt="16px"
                    component="span"
                    fontWeight={500}
                    fontSize={15}
                    color="colors.nero"
                    textAlign="center"
                  >
                    С одного флакона
                  </Box>

                  <Box
                    mt="12px"
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={400}
                    fontSize={35}
                    color="colors.blurple"
                    textAlign="center"
                  >
                    {formatNumber(
                      Math.round(formik.values.per_product_discount),
                    )}{" "}
                    руб
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <Box
            position="relative"
            mt="48px"
            width="100%"
            height="0.5px"
            backgroundColor="#ADADAD"
          />

          <Stack
            mt="24px"
            ml={{ xs: 0, md: "41px" }}
            mr={{ xs: 0, md: "65px" }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "flex-start", md: "flex-end" }}
            alignItems="center"
            spacing="30px"
          >
            <Box width={{ xs: "250px", md: "auto" }}>
              <Box
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={22}
                color="colors.nero"
              >
                В месяц при постоянном использовании присадки
              </Box>
            </Box>

            <Box
              borderRadius="12px"
              display="flex"
              minWidth={211}
              width="fit-content"
              height={53}
              pl="25px"
              pr="26px"
              backgroundColor="#D9FFBB"
            >
              <Box
                m="auto"
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={30}
                color="#416C1F"
              >
                {formatNumber(
                  Math.round(
                    formik.values.per_month_during_product_usage_discount,
                  ),
                )}{" "}
                руб
              </Box>
            </Box>
          </Stack>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default PriceCalculator;
