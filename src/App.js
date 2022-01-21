
import './App.css';
import Header from './fixed/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

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
          </Routes>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
