import styles from "./acquainting-block.module.css";

function AcquaintingBlock(): React.ReactElement {
  return (
    <section className={styles.acquaintingBlock}>
      <div>
        <p>
          Hi!
          <br />
          My name is <b>Ratmir Tsaregorodtsev</b>
          <br />
          I am a frontend engineer with more than 2 years of practice
          <br />
        </p>
      </div>
      <div>
        <img src="./portrait.png" alt="Ratmir Tsaregorodtsev's portrait" />
      </div>
    </section>
  );
}

export { AcquaintingBlock };
