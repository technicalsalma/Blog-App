import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Posts from './components/Posts';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path="/read/:id" element={<Detail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
