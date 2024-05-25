import { AnchorHTMLAttributes, FC } from "react";
import Link from "../../../shared/ui/Link";

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const AnchorLink: FC<AnchorLinkProps> = (props) => {
  if (props.href !== undefined) {
    props.href = "#" + props.href;
  }

  return <Link {...props} />;
};
