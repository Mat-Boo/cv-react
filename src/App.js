import Navigation from './components/Navigation';
import Home from'./pages/Home';
import Competences from'./pages/Competences';
import Portfolio from'./pages/Portfolio';
import Contact from'./pages/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Competences' exact element={<Competences />} />
            <Route path='/Portfolio' exact element= {<Portfolio />} />
            <Route path='/Contact' exact element= {<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;