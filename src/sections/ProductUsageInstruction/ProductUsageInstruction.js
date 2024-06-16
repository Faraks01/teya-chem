import React, { useContext } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { PriceCalculatorContext } from "@/components";
import { stepCardsData } from "./data/local/stepCardsData";
import { InstructionStepCard } from "./children";

const ProductUsageInstruction = () => {
  const { changeDialogState } = useContext(PriceCalculatorContext);

  const openCalculatorDialog = () => changeDialogState(true);

  return (
    <Box
      pt={{ xs: "85px", md: "122px" }}
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        ml="7px"
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        position="relative"
        width="100%"
        maxWidth="1243px"
      >
        <Box
          textAlign={{ xs: "center", md: "left" }}
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={{ xs: 30, md: 45 }}
          lineHeight={{ xs: "normal", md: "45.4px" }}
          color="colors.nero"
        >
          Инструкция по применению
        </Box>

        <Grid
          width="100%"
          justifyContent={{ xs: "center", md: "flex-start" }}
          mt="30px"
          rowSpacing="30px"
          container
        >
          {stepCardsData.map((data, index) => {
            const key = data.key + "___" + index;

            return (
              <Grid key={key} xs={12}>
                <InstructionStepCard
                  listPoint={index + 1}
                  description={data.description}
                  additionalDescription={data.additionalDescription}
                />
              </Grid>
            );
          })}
        </Grid>

        <Box
          mt={{ xs: "40px", md: "91px" }}
          pt="24px"
          pb="16px"
          pr="42px"
          pl="42px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          borderRadius="22px"
          sx={{
            border: "1px solid #B8B8B8",
          }}
        >
          <Box
            component="span"
            fontWeight={500}
            fontSize={20}
            lineHeight="24.2px"
            color="colors.nero"
            textAlign="center"
          >
            Вы можете самостоятельно расчитать дозировку, а так же увидеть
            реальную <br />
            экономию, воспользовавшись калькулятором
          </Box>

          <Box
            mt="25px"
            component="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="colors.blurple"
            borderRadius="17.7px"
            height="69px"
            width="100%"
            onClick={openCalculatorDialog}
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontSize="17.74px"
              fontWeight={700}
              color="colors.white"
              lineHeight="19.9px"
            >
              Открыть калькулятор
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductUsageInstruction;
