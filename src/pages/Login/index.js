import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <h1>Login</h1>
          <input type="email" required placeholder="E-mail:" />
          <input type="password" required placeholder="Senha:" />
          <button nameClass="b1" type="submit">
            Entrar
          </button>
          <Link className="lk1" to="/Recuperar">
            <p>Esqueceu sua Senha?</p>
          </Link>
          <Link className="lk" to="/Cadastro">
            <img src={login} alt="Login" />
            <p>Cadastrar Usuario</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
