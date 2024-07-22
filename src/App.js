import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Checkout from './views/checkout';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout/:id" element={<Checkout />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
