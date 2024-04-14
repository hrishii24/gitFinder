import "./App.css";
import logo from "../logo.png";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
