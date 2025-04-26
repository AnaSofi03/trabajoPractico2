import React, { useState } from "react";
import Nosotros from "./Nosotros";

function Main({ integrantes, setIntegrantes, onVerDetalle }) {
  const [nuevo, setNuevo] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    github: "",
    foto: "",
  });

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIntegrantes([...integrantes, nuevo]);
    setNuevo({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
  };

  return (
    <main>
      <h3>Agregar Integrante</h3>
      <form onSubmit={handleSubmit}>
        <Nosotros integrantes={integrantes} onVerDetalle={onVerDetalle} />
        <input
          name="nombre"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={handleChange}
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={nuevo.apellido}
          onChange={handleChange}
        />
        <input
          name="legajo"
          placeholder="Legajo"
          value={nuevo.legajo}
          onChange={handleChange}
        />
        <input
          name="github"
          placeholder="GitHub"
          value={nuevo.github}
          onChange={handleChange}
        />
        <input
          name="foto"
          placeholder="Foto URL"
          value={nuevo.foto}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </main>
  );
}

export default Main;
