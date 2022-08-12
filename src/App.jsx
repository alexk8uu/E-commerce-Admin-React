import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import List from "./pages/List";
import Login from "./pages/Login.jsx";
import New from "./pages/New";
import Single from "./pages/Single";
import { productInputs, userInputs } from "./datatablesource";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser);

  console.log("ESTO ES ADMIN", admin);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={admin ? <Home /> : <Navigate to='/login'/>} />
          <Route path="/login" element={ admin ? <Navigate to='/'/> : <Login/>} />
          <Route path="/users" element={<List />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route path="/users/new" element={<New inputs={userInputs} text="Añadir Nuevo Usuario" />} />
          <Route path="/products" element={<List />} />
          <Route path="/products/:productId" element={<Single />} />
          <Route path="/products/new" element={<New inputs={productInputs} text="Añadir Nuevo Producto" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
