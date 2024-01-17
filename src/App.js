import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Weather } from './Components/Weather/Weather';
import { Shop } from './Components/Shop/Shop';
import { Zepeto } from './Components/Zepeto/Zepeto';
import { ZepetoList } from './Components/Zepeto/ZepetoList';

import './App.css';
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
        <Route path="/zepeto">
          <Route index element={<ZepetoList />} />
          <Route path=":id" element={<Zepeto />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
