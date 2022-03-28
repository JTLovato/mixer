
import './App.css';
import Header from './fixed/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DrinkScreen from './screens/DrinkScreen';
import WhatToMakeScreen from './screens/WhatToMakeScreen';
import Favorites from './screens/Favorites';
import SearchScreen from './screens/SearchScreen';
import GlossaryScreen from './screens/GlossaryScreen'
import Footer from './fixed/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/WhatToMake" element={<WhatToMakeScreen />} exact></Route>
            <Route path="/drink/:id" element={<DrinkScreen />} exact></Route>
            <Route path="/favorites" element={<Favorites />} exact></Route>
            <Route path="/search" element={<SearchScreen />} exact></Route>
            <Route path="/glossary" element={<GlossaryScreen />} exact></Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
