import Logo from "./logo";
import styles from "./home.module.css";
import Botao01 from "./botao01";
import Sociais from "./sociais";

function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <Logo />
        <div>
          <h1 className={styles.ibage}>teste</h1>
        </div>
        <Botao01 name="Cliente" />
        <Botao01 name="Colaborador" />
        <Sociais />
      </div>
    </div>
  );
}

export default Home;
