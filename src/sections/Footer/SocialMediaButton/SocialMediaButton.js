import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled/macro";

const SocialMediaButton = (props) => {
  const { className, children, url = "" } = props;

  return (
    <Box
      className={className}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={36}
      width={36}
      borderRadius="50%"
      backgroundColor="colors.gray72"
    >
      {children}
    </Box>
  );
};

export default styled(SocialMediaButton)`
  cursor: pointer;
  transition: 150ms;

  &:hover {
    background-color: #6361c6;
  }
`;
