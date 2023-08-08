import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import AvailableProduct from './Components/AvailableProduct';
import UpcomingProduct from './Components/UpcomingProduct';
import NoPage from './Components/NoPage';
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About />} />
       <Route path='*' element={<NoPage />} />
       <Route path="/availableprod" element={<AvailableProduct />} />
       <Route path='/upcomingprod' element={<UpcomingProduct />} />
    </Routes>
    </div>
  );
}

export default App;

