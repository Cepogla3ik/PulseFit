import Logo from "./Logo/Logo";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Logo />
    </div>
  );
}