import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import List from "./pages/List";
import Login from "./pages/Login.jsx";
import New from "./pages/New";
import Single from "./pages/Single";
import {
  productInputs,
  userInputs,
  userColumns,
  productColumns,
} from "./datatablesource";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "./requestMethods.js";
import { getProducts } from "./redux/apiCalls.js";

function App() {
  const admin = useSelector((state) => state.user.currentUser);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/");
        setUsers(
          res.data.map((user) => ({
            id: user._id,
            username: user.username,
            img:
              user.img ||
              "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",
            email: user.email,
            isAdmin: user.isAdmin,
            created: user.createdAt.split("T")[0],
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getProducts(dispatch);
    getUsers();
  }, [dispatch]);

/*   console.log("ESTO ES ADMIN", admin); */
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={admin ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={admin ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/users"
            element={
              <List
                columns={userColumns}
                type="Usuario"
                data={users}
              />
            }
          />
          <Route path="/users/:userId" element={<Single />} />
          <Route
            path="/users/new"
            element={<New inputs={userInputs} text="Añadir Nuevo Usuario" />}
          />
          <Route
            path="/products"
            element={
              <List
                columns={productColumns}
                type='Producto'
                data={products}
              />
            }
          />
          <Route path="/products/:productId" element={<Single type="Product"/>} />
          <Route
            path="/products/new"
            element={
              <New inputs={productInputs} text="Añadir Nuevo Producto" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
