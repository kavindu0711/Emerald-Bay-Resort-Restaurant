import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

//pages
import { Home } from "./pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
