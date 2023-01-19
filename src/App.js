import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Contacts />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
