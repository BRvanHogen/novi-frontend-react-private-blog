import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <Router>


      </Router>
  );
}

export default App;

// [ ] Maak vier pagina componenten en zet er wat dummy content op. Geef alle "pagina's" weer in App.js

// Home pagina (/)
// Login pagina (/login)
// Blog Overzicht pagina (/blogposts)
// Blogpost pagina (/blog/:id)

// [ ] Installeer react-router-dom en zet de basis routing op in de applicatie (gebruik de documentatie
// of EdHub als geheugensteuntje). Zorg dat je alle pagina's kunt bezoeken. ' +
// 'Je hoeft nog geen rekening te houden met toegankelijkheid.
