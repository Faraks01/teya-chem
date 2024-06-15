import React from "react";
import { Box } from "@mui/system";
import { AdditionalDescriptionPoint } from "./children";
import Grid from "@mui/system/Unstable_Grid";

const InstructionStepCard = ({
  listPoint = 1,
  description,
  additionalDescription = [],
}) => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      <Box
        width="100%"
        pt="32px"
        pb="32px"
        pl="24px"
        pr="24px"
        display="flex"
        bgcolor="colors.white"
        borderRadius="22px"
        alignItems="center"
        gap="24px"
      >
        <Box
          height={50}
          minWidth={50}
          width="fit-content"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="12px"
          sx={{
            border: "4px solid",
          }}
          borderColor="colors.jetBlack"
        >
          <Box
            component="span"
            fontWeight={700}
            fontSize={32}
            lineHeight="20.57px"
            color="colors.jetBlack"
            zIndex={2}
          >
            {listPoint}
          </Box>
        </Box>

        <Box
          component="span"
          fontWeight={500}
          fontSize={22}
          color="colors.nero"
          zIndex={2}
        >
          {description}
        </Box>
      </Box>

      <Grid width="100%" mt="21px" rowSpacing="21px" container>
        {additionalDescription.map((elem, index) => (
          <Grid key={"AdditionalDescriptionPoint" + "__" + index} xs={12}>
            <AdditionalDescriptionPoint>{elem}</AdditionalDescriptionPoint>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InstructionStepCard;
