import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Bulb from "./components/Bulb"

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
        <Bulb  on={true} />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
}

createRoot(
  document.querySelector('#app'),
).render(<App />);
