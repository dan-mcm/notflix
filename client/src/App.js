import "./App.css";
import Favourites from "./screens/Favourites";
import Search from "./screens/Search";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

// overwriting antd style
const customTitleStyle = {
  color: "white",
  fontSize: "2em",
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={customTitleStyle}>Notflix</h1>
      </header>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
