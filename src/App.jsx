//import './App.css';
import { Header } from './Header/Header.jsx'
import { Footer } from './Footer/Footer.jsx'
import { NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Home } from './Home/Home.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/Home' element={ <Home /> } />
        {/* <Route path='/' element={ <Scores /> } />
        <Route path='/' element={ <About /> } /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
