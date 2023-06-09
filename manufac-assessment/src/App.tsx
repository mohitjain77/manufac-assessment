import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="graphs">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
