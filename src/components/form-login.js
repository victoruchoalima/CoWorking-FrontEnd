/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./form-login.module.css";
import Input from "./form/input.js";
import Entrar from "./form/entrar.js";
import Lembrar from "./form/lembrar.js";
import Inscreva from "./form/inscreva.js";

function Form({ showInscricao }) {
  if (showInscricao) {
    return (
      <>
        <Inscreva />
      </>
    );
  }
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
    </form>
  );
}

export default Form;
