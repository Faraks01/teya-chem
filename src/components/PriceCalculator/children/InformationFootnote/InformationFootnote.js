import React from "react";
import { ListInfoPoint } from "@/components";
import { Box, Stack } from "@mui/system";

const SUBPOINTS = [
  "Устройство моторной и топливной системы транспортного средства",
  "Установленные системы фильтрации топлива",
  "Режимы эксплуатации транспортного средства",
  "Погодные условия",
];

const InformationFootnote = () => {
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }} gap="10px">
      <ListInfoPoint
        pl={0}
        gap={{ xs: "6px", md: "11px" }}
        displayPoint={{ xs: "none", md: "block" }}
      >
        Действительная экономия топлива может отличатся от заявленной и зависит
        от множества факторов таких как:
      </ListInfoPoint>

      {SUBPOINTS.map((item, index) => (
        <Box
          ml={{ xs: 0, md: "41px" }}
          key={`subpoint__${index}`}
          component="span"
          fontWeight={500}
          fontSize={18}
          lineHeight="21.78px"
          color="colors.gray33"
        >
          - {item}
        </Box>
      ))}
    </Stack>
  );
};

export default InformationFootnote;
