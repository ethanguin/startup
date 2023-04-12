import { Header } from './Header/Header.jsx';
import { Footer } from './Footer/Footer.jsx';
import { Home } from './Home/Home.jsx';
import { About } from './About/About.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        {/* <Route path='/' element={ <Scores /> } />*/}
        <Route path='/About' element={ <About /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
