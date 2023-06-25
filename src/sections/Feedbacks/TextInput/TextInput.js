import React from "react";
import {Box} from "@mui/system";

const TextInput = (props) => {
  const {
    id = '',
    label = '',
    name = '',
    inputWidth = '',
    type = 'text',
    ...restInputProps
  } = props;

  return (
    <Box
      display='flex'
      flexDirection='column'
    >
      {!!label && (
        <Box
          mb='13px'
          htmlFor={id}
          component="label"
          fontWeight={500}
          fontSize={17}
          lineHeight="23.69px"
          color="colors.romanSilver"
        >
          {label}
        </Box>
      )}

      <Box
        id={id}
        display='flex'
        alignItems='center'
        pl='17.77px'
        pr='17.77px'
        component='input'
        type={type}
        fontWeight={500}
        fontSize={17}
        name={name}
        width={inputWidth}
        height='50px'
        borderRadius='14.21px'
        backgroundColor='colors.gray98'
        sx={{
          border: '0.592199px solid #CECECE'
        }}
        {...restInputProps}
      />
    </Box>
  );
}

export default TextInput
