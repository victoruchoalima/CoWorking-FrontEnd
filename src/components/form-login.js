import styles from "./form-login.module.css";
import Input from "./form/input.js";
import Entrar from "./form/entrar.js";
import Lembrar from "./form/lembrar.js";

function Form() {
  return (
    <form className={styles.form}>
      <Input text="Usuário" type="text" placeholder="E-mail" name="usuario" />
      <Input
        text="Senha"
        type="password"
        placeholder="Insira sua senha"
        name="password"
      />
      <Lembrar />
      <Entrar text="Entrar" />
      <p>
        Não possui uma conta? <a href="#">Inscreva-se </a>
      </p>
    </form>
  );
}

export default Form;
