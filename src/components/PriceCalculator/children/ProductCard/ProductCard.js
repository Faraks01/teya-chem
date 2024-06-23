import React from "react";
import { Box } from "@mui/system";

/**
 * @param {string} title - Body title
 * @param {function(): void} onClick - On click callback function.
 * */
const ProductCard = ({ title, onClick }) => {
  return (
    <Box
      borderRadius="12px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      minWidth={211}
      width="fit-content"
      component="button"
      pl={1}
      pr={1}
      height={148}
      backgroundColor="colors.whiteSmoke"
      aria-label="Product card button"
      onClick={onClick}
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
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
