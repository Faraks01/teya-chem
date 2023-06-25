import React from "react";
import {Box} from "@mui/system";

const TextAreaInput = (props) => {
  const {
    id = '',
    label = '',
    name = '',
    inputWidth = '',
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
        alignItems='center'
        pt='15px'
        pb='15px'
        pl='15px'
        pr='15px'
        component='textarea'
        fontWeight={500}
        fontSize={17}
        name={name}
        width={inputWidth}
        height='121px'
        borderRadius='14.21px'
        backgroundColor='colors.gray98'
        sx={{
          border: '0.592199px solid #CECECE',
          resize: 'none'
        }}
        {...restInputProps}
      />
    </Box>
  );
}

export default TextAreaInput
