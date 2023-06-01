import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}

export { Button };
