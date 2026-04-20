import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <span>Welcome to the PulseFit!</span>
    </header>
  );
}