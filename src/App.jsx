//import './App.css';
import { Header } from './Header/Header.jsx'
import { Footer } from './Footer/Footer.jsx'
import { NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>Hi</div>
      <Footer />
    </div>
  );
}

export default App;
