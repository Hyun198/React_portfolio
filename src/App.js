import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Weather } from './pages/Weather';
import { Shop } from './pages/Shop';
import { Zepeto } from './pages/Zepeto';
import './App.css';
import { ZepetoList } from './pages/ZepetoList';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/zepeto">Zepeto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/zepeto" element={<ZepetoList />} />
        <Route path="/zepeto/:id" element={<Zepeto />} />
      </Routes>
    </>
  );
}

export default App;
