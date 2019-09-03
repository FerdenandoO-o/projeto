import React from 'react';
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <Container>
      <div>
        <form>
          <h1>Cadastre-se</h1>
          <input type="text" placeholder="Nome:" />
          <input type="email" required placeholder="E-mail:" />
          <input type="password" required placeholder="Senha:" />
          <button type="submit">Cadastrar</button>
          <Link className="lk1" to="/">
            <p>Login</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}