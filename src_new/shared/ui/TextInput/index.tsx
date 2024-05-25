import React, { FC, InputHTMLAttributes } from "react";
import { Box } from "@mui/system";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputWidth?: number | string;
}

const TextInput: FC<TextInputProps> = (props) => {
  const {
    id,
    label,
    name,
    inputWidth,
    type,
    variant = "primary",
    ...restInputProps
  } = props;

  const altVariant = variant === "secondary";

  const preventNonNumericalInput = (e) => {
    if (type === "number") {
      const charCode = typeof e.which == "undefined" ? e.keyCode : e.which;
      const charStr = String.fromCharCode(charCode);

      if (!charStr.match(/^[0-9]+$/) && e.keyCode !== 8) {
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
        bgcolor={altVariant ? "colors.white" : "colors.gray98"}
        sx={{
          border: altVariant ? "1px solid #D7D7D7" : "0.592199px solid #CECECE",
        }}
        {...restInputProps}
        // onKeyDown={preventNonNumericalInput}
      />
    </Box>
  );
};

export default TextInput;
