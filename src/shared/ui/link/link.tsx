import { Link as RouterLink } from "react-router-dom";

import styles from "./link.styles.module.css";
import { LinkProps } from "./link.types";

function Link({ to, children }: LinkProps) {
  return (
    <RouterLink to={to} className={styles.link}>
      {children}
    </RouterLink>
  );
}

export { Link };
