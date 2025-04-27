import React from "react";
import Main from "../componentes/Main";


function NosotrosPages({ integrantes, setIntegrantes, setIntegranteSeleccionado, setPagina }) {
  return (
    <div>
      <h2>Conoce a nuestro equipo</h2> 
      <p>Estos son los integrantes que forman parte de nuestro grupo.</p>
      
      <h3>Lista de Integrantes</h3> 
      
      <div className="MainContainer">
        <Main
          integrantes={integrantes}
          setIntegrantes={setIntegrantes}
          onVerDetalle={(int) => {
            setIntegranteSeleccionado(int);
            setPagina("view");
          }}
        />
      </div>
    </div>
  );
}

export default NosotrosPages;