import React from 'react';
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Recuperar() {
  return (
    <Container>
      <div>
        <form>
        <h1>Recuperar Acesso</h1>
          <input type="email" required placeholder="E-mail:" />
          <button type="submit">Enviar</button>
          <Link className="lk1" to="/">
            <p>Login</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}