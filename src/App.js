import React, { useState, useEffect } from 'react';
import PriceList from './PriceList';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true); // Estado para el cartel de bienvenida

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const handleWelcomeButtonClick = () => {
    setShowWelcome(false);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {showWelcome ? (
        <div className="welcome-modal">
          <h1>Distribuidora de cigarrillos JJV</h1>
          <button onClick={handleWelcomeButtonClick}>Ver precios</button>
        </div>
      ) : (
        <>
          <header>
            <nav>
              <h1>Lista de Precios de Cigarrillos</h1>
              <button onClick={toggleDarkMode}>
                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
            </nav>
          </header>
          <main>
            <PriceList />
          </main>
          <button
            className="scrollTop"
            onClick={scrollTop}
            style={{ display: showScroll ? 'flex' : 'none' }}
          >
            ↑
          </button>
          <footer className="App-footer">
            <a href="https://wa.me/+5491162077576" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="mailto:juanjo.cuervo@hotmail.es">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
