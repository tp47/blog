import { Navigation } from "@/features/navigation/navigation";

import { Logo } from "../logo/logo";
import styles from "./layout-header.module.css";

function LayoutHeader(): React.ReactElement {
  return (
    <header className={styles.layoutHeader}>
      <Logo></Logo>
      <Navigation />
    </header>
  );
}

export { LayoutHeader };
