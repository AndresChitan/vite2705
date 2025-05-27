import"./assets/styles/App.css"
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Resto de tu aplicación */}
      <Footer />
    </div>
  );
}

export default App;



