import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
      <div>
      <BrowserRouter>
      <Nav ></Nav> 
          <Routes>
            <Route path="/" element={<Products></Products>}></Route>
            
          </Routes>
          <Footer></Footer>
       </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
