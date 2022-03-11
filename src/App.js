
import './App.css';
import Header from './fixed/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import DrinkScreen from './screens/DrinkScreen';
import WhatToMakeScreen from './screens/WhatToMakeScreen';
import Favorites from './screens/Favorites';
import SearchScreen from './screens/SearchScreen';

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
          </Routes>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
