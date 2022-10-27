import './App.css';
import Favourites from './screens/Favourites';
import Search from './screens/Search';
import Nav from './components/Nav';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Notflix</h1>
      </header>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/favourites" element={<Favourites/>} />
      </Routes>
    </div>
  );
}

export default App;
