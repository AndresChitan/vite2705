import { useState } from 'react';
import "./assets/styles/App.css";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import {HomePage} from './Pages/HomePage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      <Navbar 
        toggleSidebar={toggleSidebar} 
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
      />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={sidebarOpen ? 'content-shifted' : ''}>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

