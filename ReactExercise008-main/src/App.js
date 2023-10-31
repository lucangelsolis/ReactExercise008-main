import { useState } from "react";
import CoordenadaFlecha from './CoordenadaFlecha';

function App() {

  const [visible, setVisible] = useState(true)
  const [texto, setTexto] = useState("Ocultar");

  function ocultar() {
    if (visible){
    setVisible(false)
    setTexto("Mostrar")
  }else{
    setVisible(true)
    setTexto("Ocultar")
  }
  }

  return (
    <div>
      {visible ? <CoordenadaFlecha /> : <p>Se oculto la coordenada</p>}
      <button onClick={ocultar}>{texto}</button>
    </div>
  );
}

export default App