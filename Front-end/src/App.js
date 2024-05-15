import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SinUp from "./Pages/SinUp";
import Product from "./Pages/Product";
import AddProducts from "./Pages/AddProducts";
import LogOut from "./Pages/LogOut";
import UpdateProducts from "./Pages/UpdateProducts";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateComponent />}>
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/UpdateProduct/:id" element={<UpdateProducts />} />
          <Route path="/Product" element={<Product />} />
        </Route>
        <Route path="/sinup" element={<SinUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
