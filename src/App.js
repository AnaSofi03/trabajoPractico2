import Main from "./componentes/Main";
import Ju from "./Imagen/Ju.png"


function App() {
  const integrantes = [
    {
      nombre: "Julieta",
      apellido: "Diaz",
      legajo: "61472",
      github: "https://github.com/juliidiiaz04",
      foto:Ju,
    }];
  return (
    <>
      <Main integrantes={integrantes} />
      
    </>
  );
}

export default App;
