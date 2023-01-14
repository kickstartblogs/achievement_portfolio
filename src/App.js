import './App.css';
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import Home from "./pages/model/Home.js"
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
