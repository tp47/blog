import styles from "./not-found.module.css";

function NotFound(): React.ReactElement {
  return (
    <div>
      <pre className={styles.error}>
        ________________/\\\_________
        <br />
        &nbsp;______________/\\\\\_________
        <br />
        &nbsp;&nbsp;____________/\\\/\\\_________
        <br />
        &nbsp;&nbsp;&nbsp;__________/\\\/\/\\\_________
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;________/\\\/__\/\\\_________
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______/\\\\\\\\\\\\\\\\______
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____\///////////\\\//_______
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______________\/\\\_________
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______________\///__________
      </pre>
    </div>
  );
}

export { NotFound };
