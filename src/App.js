import Main from "./componentes/Main";
import Nosotros from "./componentes/Nosotros";
import Ju from "./Imagen/Ju.png"


function App() {
  const integrantes = [
    {
      nombre: "Julieta",
      apellido: "Diaz",
      legajo: "61472",
      github: "https://github.com/juliidiiaz04",
      foto:Ju,
    },
    {
      nombre: "Esteban Maximiliano",
      apellido: "Samaniego",
      legajo: "61468",
      github: "https://github.com/MaxiSama12",
      foto: "",
    }];
  return (
    <>
      <Main integrantes={integrantes} />
      <Nosotros integrantes={integrantes} />
    </>
  );
}

export default App;
