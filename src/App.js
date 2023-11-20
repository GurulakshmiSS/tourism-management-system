
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Package from './components/Package';
import TourBooking from './components/TourBooking';
import Contact from './components/Contact';
import About from './components/About';
import CreateTour from './components/CreateTour';


function App() {
  return (
    <Router>
      <div className="App">
         <main className="App-main">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/package" element={<Package />} />
            <Route path="/tour_booking" element={<TourBooking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create_tour" element={<CreateTour />} />
         </Routes>
        </main>
              </div>
    </Router>
  );
}

export default App;
