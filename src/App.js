import './App.css';
import Cards from './Blogs/Cards';
import CardsD from './BlogsDetails/CardsD';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/Cards/:id' element={<CardsD />} />
      </Routes>


    </div>

  );
}

export default App;
