import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='\' element={<Banner></Banner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
