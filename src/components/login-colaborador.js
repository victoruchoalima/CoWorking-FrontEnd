import Logo from "./logo";
import styles from "./login-colaborador.module.css";
import Sociais from "./sociais";
import Form from "./form-login";

function LoginColab() {
  return (
    <div>
      <div className={styles.loginWrapper}>
        <Logo />
        <div className={styles.loginConteiner}>
          <h1>Colaborador</h1>
          <Form showInscricao={false} />
        </div>
      </div>
      <Sociais />
    </div>
  );
}

export default LoginColab;
