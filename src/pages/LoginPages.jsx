import React, { useState } from "react";
import "../style/LoginPages.css"; 

function LoginPages() {
  const [usuario, setUsuario] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Bienvenido, ${usuario.username});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        name="username"
        placeholder="Usuario"
        value={usuario.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={usuario.password}
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginPages;