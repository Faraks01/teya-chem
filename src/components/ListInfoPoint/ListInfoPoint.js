import React from "react";
import listInfoPointIconSrc from "@/assets/vectors/list_info_point.svg";
import { Box } from "@mui/system";

/**
 * @extends {typeof Box}
 * @property {"none"|"block"} [displayPoint]
 */
const ListInfoPoint = ({ children, displayPoint, ...boxProps }) => {
  return (
    <Box
      width="auto"
      display="flex"
      flexDirection="row"
      gap="26.5px"
      pl="43px"
      alignItems="center"
      {...boxProps}
    >
      <Box height="30.04px" width="30.04px" display={displayPoint}>
        <img src={listInfoPointIconSrc} alt="list info point icon" />
      </Box>

      <Box
        component="span"
        fontWeight={500}
        fontSize={18}
        lineHeight="21.78px"
        color="colors.gray33"
      >
        {children}
      </Box>
    </Box>
  );
};

export default ListInfoPoint;
