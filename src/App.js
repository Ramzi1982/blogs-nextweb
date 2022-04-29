import './App.css';
import Cards from './components/Cards';
import Card1 from './Detaille components/Card1';
import Card2 from './Detaille components/Card2';
import Card3 from './Detaille components/Card3';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/Card1' element={<Card1 />} />
        <Route path='/Card2' element={<Card2 />} />
        <Route path='/Card3' element={<Card3 />} />
      </Routes>


    </div>

  );
}

export default App;
