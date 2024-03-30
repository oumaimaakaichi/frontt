import Dash from "./dash";
import Inventory from "./Pages/Inventory";

import AjoutAdu from "./Pages/audition";
import Home from "./Pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./inscription";
import Customers from "./Pages/Customers";
import ArchiveSaison from "./Pages/condidatSaison/archiveSaison";
import Confirmation from "./Pages/confirmation/confirmation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route exact path="/home/:token" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/AjoutE" element={<AjoutAdu />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/register" element={<Form />} />
      <Route path="/ArchiveSaison" element={<ArchiveSaison />} />
      <Route path="/Confirmation/:token" element={<Confirmation />} />
    </Routes>
  );
}
export default App;
