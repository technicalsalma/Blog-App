import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
