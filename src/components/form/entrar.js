import styles from "./entrar.module.css";

function Entrar({ text }) {
  return (
    <div>
      <button className={styles.btnEntrar}>{text}</button>
    </div>
  );
}

export default Entrar;
