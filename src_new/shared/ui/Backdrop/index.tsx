import styled from "@emotion/styled/macro";
import { forwardRef, HTMLAttributes } from "react";

interface BackdropProps {
  open: boolean;
  className?: string;
}

interface BackdropStyleProps {
  bgColor?: string;
}

const Backdrop = forwardRef<any, BackdropProps>((props, ref) => {
  const { open, className, ...other } = props;

  return (
    <div
      className={`${className} ${open && "MuiBackdrop-open"}`}
      ref={ref}
      {...other}
    />
  );
});

export default styled(Backdrop)<BackdropStyleProps>`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ${(props) => props.bgColor ?? "rgba(0, 0, 0, 0.5)"};
  -webkit-tap-highlight-color: transparent;
`;
