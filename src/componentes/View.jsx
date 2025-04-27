import React from "react";
 

function View({ integrante }) {
  if (!integrante) {
    return <p>No se seleccionó ningún integrante.</p>;
  }

  return (
    <div>
      <h2>Detalle del Integrante</h2>
      <img src={integrante.foto} alt={integrante.nombre} width={150} />
      <p>{integrante.nombre} {integrante.apellido}</p>
      <p>Legajo: {integrante.legajo}</p>
      <p><a href={integrante.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  );
}

export default View;