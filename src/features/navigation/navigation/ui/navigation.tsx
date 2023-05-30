import { Link } from "@/shared/ui";

import styles from "./navigation.module.css";

function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/contacts">/contacts</Link>
        </li>
        <li>
          <Link to="/resume">/resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };
