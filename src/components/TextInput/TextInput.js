import React from "react";
import { Box } from "@mui/system";

const TextInput = (props) => {
  const {
    id = "",
    label = "",
    name = "",
    inputWidth = "",
    type = "text",
    variant = "primary",
    ...restInputProps
  } = props;

  const altVariant = variant === "secondary";

  const preventNonNumericalInput = (e) => {
    if (type === "number") {
      const charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
      const isNumpadNumber = charCode >= 96 && charCode <= 105;
      const isBackspace = e.keyCode === 8;
      const charStr = String.fromCharCode(charCode);

      const isCorrectChar =
        charStr.match(/^[0-9]+$/) !== null || isBackspace || isNumpadNumber;

      if (!isCorrectChar) {
        e.preventDefault();
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      {!!label && (
        <Box
          mb={altVariant ? "11px" : "13px"}
          htmlFor={id}
          component="label"
          fontWeight={500}
          fontSize={altVariant ? 14 : 17}
          lineHeight={altVariant ? "normal" : "23.69px"}
          color={altVariant ? "colors.jetBlack" : "colors.romanSilver"}
        >
          {label}
        </Box>
      )}

      <Box
        id={id}
        display="flex"
        alignItems="center"
        pl={altVariant ? "16px" : "17.77px"}
        pr={altVariant ? "16px" : "17.77px"}
        component="input"
        type={type}
        fontWeight={500}
        fontSize={altVariant ? 16 : 17}
        color={altVariant ? "colors.gray33" : undefined}
        name={name}
        width={inputWidth}
        height={altVariant ? "53px" : "50px"}
        borderRadius={altVariant ? "12px" : "14.21px"}
        backgroundColor={altVariant ? "colors.white" : "colors.gray98"}
        sx={{
          border: altVariant ? "1px solid #D7D7D7" : "0.592199px solid #CECECE",
        }}
        {...restInputProps}
        onKeyDown={preventNonNumericalInput}
      />
    </Box>
  );
};

export default TextInput;
