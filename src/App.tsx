import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/structure/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <HashRouter>
      <div
        className="App"
        style={{
          background: "#292a2d",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound item={"page"} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
