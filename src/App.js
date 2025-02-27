import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ClothesList from "./pages/clothes/ClothesList";
import ClothesDetail from "./pages/clothes/ClothesDetail";
import AddClothes from "./pages/clothes/AddClothes";
import EditClothes from "./pages/clothes/EditClothes";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/closeList" element={<ClothesList />} />
    <Route path="/clothes/:id" element={<ClothesDetail />} />
    <Route path="/clothes/add" element={<AddClothes />} />
    <Route path="/clothes/edit/:id" element={<EditClothes />} />

  </Routes>
</BrowserRouter>
  );
}

export default App;
