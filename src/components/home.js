import Logo from "./logo";
import styles from "./home.module.css";
import Botao01 from "./botao01";
import Sociais from "./sociais";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <Logo />
        <div>
          <h1 className={styles.ibage}>teste</h1>
        </div>
        <Link to="logincliente">
          <Botao01 name="Cliente" />
        </Link>
        <Link to="logincolab">
          <Botao01 name="Colaborador" />
        </Link>

        <Sociais />
      </div>
    </div>
  );
}

export default Home;
