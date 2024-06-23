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
import { ListInfoPoint, Select, TextInput } from "@/components";
import { FUEL_BRANDS } from "@/constants";
import wavesSeparatorVector from "@/assets/vectors/waves_separator.svg";
import { navigateToAnchor } from "@/utils";
import { ProductCard, StyledBackdrop, StyledModal } from "./children";
import { BUY_ON_THIS_SITE_SECTION_ID } from "@/sections";
import { useCalculatedValues } from "./hooks";
import plural from "plural-ru";
import InformationFootnote from "./children/InformationFootnote";

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

const PriceCalculator = () => {
  const { dialogOpen, changeDialogState } = useContext(PriceCalculatorContext);

  const closeDialog = () => changeDialogState(false);

  const navigateToProductsSection = () => {
    closeDialog();
    navigateToAnchor(BUY_ON_THIS_SITE_SECTION_ID);
  };

  const { values, handleSelectInputChange, handleInputChange, resetForm } =
    useCalculatedValues();

  const {
    tank_volume,
    fuel_price,
    full_charge_price,
    average_consumption,
    amount_of_common_product_packs,
    average_mileage_per_month,
    mileage_per_hundred_kilometers_discount,
    fuel_brand,
    full_charge_discount,
    per_month_during_product_usage_discount,
    per_product_discount,
    product_dosage,
  } = values;

  useEffect(() => {
    if (!dialogOpen) {
      resetForm();
    }
  }, [dialogOpen, resetForm]);

  const packsTitle = useMemo(
    () =>
      plural(
        amount_of_common_product_packs,
        "%d флакон",
        "%d флакона",
        "%d флаконов",
      ),
    [amount_of_common_product_packs],
  );

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
          height={{ xs: "calc(100% - 70px)", md: "fit-content" }}
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
              max={999}
              onChange={handleInputChange("tank_volume")}
              value={tank_volume}
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
              value={fuel_brand}
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
              value={average_consumption}
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
              value={fuel_price}
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
              value={average_mileage_per_month}
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
                {full_charge_price} руб
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
              <ProductCard
                title={packsTitle}
                onClick={navigateToProductsSection}
              />

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
                  {product_dosage} мл
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
                Ваша возможная экономия:
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
                    {full_charge_discount} руб
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
                    {mileage_per_hundred_kilometers_discount} руб
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
                    {per_product_discount} руб
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
                {per_month_during_product_usage_discount} руб
              </Box>
            </Box>
          </Stack>

          <Box ml={{ xs: 0, md: "41px" }} p={{ xs: "0 10px", md: 0 }} mt="20px">
            <InformationFootnote />
          </Box>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default PriceCalculator;
