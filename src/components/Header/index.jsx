import styles from "./styles.module.scss";

export function Header({ id, name, age, children }) {
  return (
    <p className={styles.header} name={id} data-age={age}>
      Olá Mundo!
    </p>
  );
}
