import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './App.css';
import Weather from './Components/Weather/Weather';
import Shop from './Components/Shop/Shop';
import PartTime from './Components/PartTime/PartTime';
import ZepetoList from './Components/Zepeto/ZepetoList';
import Zepeto from './Components/Zepeto/Zepeto';


function App() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li className='list'>
            <Link to="/">
              home
            </Link>
          </li>
          <li className='list'>
            <Link to="/portfolio">
              portfolio
            </Link>
          </li>
          <li className='list'>
            <Link to="/about">
              about
            </Link>
          </li>
          <li className='list'>
            <Link to="/contact">contact
            </Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/parttime" element={<PartTime />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="zepeto">
              <Route index element={<ZepetoList />} />
              <Route path=":id" element={<Zepeto />} />
            </Route>
          </Routes>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
