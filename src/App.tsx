import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Desk from "./pages/Desk";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/desk" element={<Desk />} />
    </Routes>
  );
}

export default App
