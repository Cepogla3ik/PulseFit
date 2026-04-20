import Header from "./Header/Header";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}