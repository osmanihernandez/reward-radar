import Dashboard from "./components/Dashboard";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GiveawayDetail from "./components/GiveawayDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/detail/:id" element={<GiveawayDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
