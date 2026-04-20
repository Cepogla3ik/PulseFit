import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={"/pulsefit_logo.png"} alt={"PulseFit"} />
    </div>
  );
}