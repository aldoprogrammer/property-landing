import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Aplikasi from './components/Aplikasi';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <NavBar />
      <Hero />
      <Offer />
      <Aplikasi />
      <Work/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
