import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SinUp from "./Pages/SinUp";
import Product from "./Pages/Product";
import AddProducts from "./Pages/AddProducts";
import LogOut from "./Pages/LogOut";
import UpdateProducts from "./Pages/UpdateProducts";
import PrivateComponent from "./Components/PrivateComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateComponent />}>
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/UpdateProduct" element={<UpdateProducts />} />
          <Route path="/Product" element={<Product />} />
        </Route>
        <Route path="/sinup" element={<SinUp />} />
      </Routes>
    </>
  );
}

export default App;
