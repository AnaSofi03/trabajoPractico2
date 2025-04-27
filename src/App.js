import React, { useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import View from "./componentes/View";
import HomePages from "./pages/HomePages";
import LoginPages from "./pages/LoginPages";
import NosotrosPages from "./pages/NosotrosPages";
import "./App.css";
import Ju from "./imagen/Ju.png";

function App() {
  
  // const [integrantes, setIntegrantes] = useState([]);
  const [integrantes, setIntegrantes] = useState([
    {
      nombre: "Julieta Camila",
      apellido: "Diaz",
      legajo: "61472",
      github: "https://github.com/juliidiiaz04",
      foto: Ju,
    },{
      nombre: "Ana Sofia",
      apellido: "Guerrero",
      legajo: "",
      github: "",
      foto: Ju,
    }]);
  
  const [integranteSeleccionado, setIntegranteSeleccionado] = useState(null);
  
  const [pagina, setPagina] = useState("home");
  const paginas = {
    home: <HomePages />,
    login: <LoginPages />,
    nosotros: (
      <NosotrosPages
        integrantes={integrantes}
        setIntegrantes={setIntegrantes}
        setPagina={setPagina}
        setIntegranteSeleccionado={setIntegranteSeleccionado}
      />
    ),
    view: <View integrante={integranteSeleccionado} />
  };

  return (
    <>
      <Header setPagina={setPagina} />
      {paginas[pagina] || <HomePages />}
      <Footer />
    </>
  );
}

export default App;