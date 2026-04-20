import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import styles from "./Index.module.scss";

export default function Index() {
  
  return (
    <div className={styles.index}>
      <Menu />
      <Main />
    </div>
  );
}