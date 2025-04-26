import React from "react";


function Nosotros({ integrantes, onVerDetalle }) {
  return (
    <div className="nosotros-container">
      <h2>Integrantes del Grupo</h2>
      <p>Conoce a los miembros de nuestro equipo.</p>
      <div className="integrantes-lista">
        {integrantes.map((int, index) => (
          <div key={index} className="integrante-card">
            <img src={int.foto} alt={int.nombre} className="integrante-img" />
            <div className="integrante-info">
              <p className="integrante-nombre">{int.nombre} {int.apellido}</p>
              <p className="integrante-legajo">Legajo: {int.legajo}</p>
              <a href={int.github} target="_blank" rel="noopener noreferrer" className="integrante-github">GitHub</a>
              <button onClick={() => onVerDetalle(int)} className="ver-detalle-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nosotros;