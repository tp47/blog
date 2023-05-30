import { Link } from "@/shared/ui";

import styles from "./logo.module.css";

function Logo(): React.ReactElement {
  return (
    <div className={styles.root}>
      <Link to="/">Ratmir Tsaregorodtsev</Link>
    </div>
  );
}

export { Logo };
