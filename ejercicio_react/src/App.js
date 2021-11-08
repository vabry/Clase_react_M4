
import UsuarioFuncional from './components/usuarios-comp-funcional';
import UsuarioClase from './components/usuario-comp-clase';

function App() {
  return (
    <div>
      <h1> Introducción a REACT</h1>
      <br/>
      <h3>Componente funcional</h3>
      <UsuarioFuncional/> 
      <h3>Componente clase</h3> 
      <UsuarioClase/>
    </div>
  );
}

export default App;
