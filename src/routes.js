import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Recuperar from "./pages/Recuperar";


export default function Caminho() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Recuperar" component={Recuperar} />
    </BrowserRouter>
  );
}
