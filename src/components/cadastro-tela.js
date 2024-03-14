import Logo from "./logo.js";
import styles from "../components/cadastro-tela.module.css";

function Cadastro() {
  return (
    <div>
      <div className={styles.cadastroTelaContainer}>
        <Logo />;
      </div>
    </div>
  );
}

export default Cadastro;
