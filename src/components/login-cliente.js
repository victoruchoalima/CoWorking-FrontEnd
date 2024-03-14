import Logo from "./logo";
import styles from "./login-cliente.module.css";
import Sociais from "./sociais";
import Form from "./form-login";

function Login() {
  return (
    <div>
      <div className={styles.loginWrapper}>
        <Logo />
        <div className={styles.loginConteiner}>
          <h1>Login</h1>
          <Form />
        </div>
      </div>
      <Sociais />
    </div>
  );
}

export default Login;
