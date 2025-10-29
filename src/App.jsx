import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";

function App() {
  // Movida JavaScript
  const titulo = "Hola Mundo";
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;

