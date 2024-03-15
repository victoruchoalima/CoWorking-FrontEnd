/* eslint-disable no-unused-vars */
import "./App.css";
import Logo from "./components/logo.js";
import Cadastro from "./components/cadastro-tela.js";
import Botao01 from "./components/botao01.js";
import Botao02 from "./components/botao02.js";
import Sociais from "./components/sociais.js";
import Home from "./components/home.js";
import Input from "./components/form/input.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCliente from "./components/login-cliente.js";
import LoginColab from "./components/login-colaborador.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logincliente" element={<LoginCliente />} />
        <Route path="logincolab" element={<LoginColab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
