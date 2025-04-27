import React from "react";


function Header({ setPagina }) {
  return (
    <header>
      <h1>Presentación del Grupo</h1>
      <nav>
        <button onClick={() => setPagina("home")}>Inicio</button>
        <button onClick={() => setPagina("nosotros")}>Nosotros</button>
        <button onClick={() => setPagina("login")}>Login</button>
      </nav>
    </header>
  );
}

export default Header;