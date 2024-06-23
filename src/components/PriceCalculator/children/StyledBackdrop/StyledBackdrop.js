import React from "react";
import styled from "@emotion/styled/macro";

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={`${className} ${open && "MuiBackdrop-open"}`}
      ref={ref}
      {...other}
    />
  );
});

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default StyledBackdrop;
