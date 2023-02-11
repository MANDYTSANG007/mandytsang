import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
