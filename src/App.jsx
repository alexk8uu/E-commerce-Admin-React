import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import List from "./pages/List";
import Login from "./pages/Login.jsx";
import New from "./pages/New";
import Single from "./pages/Single";
import { productInputs, userInputs } from "./datatablesource";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  ).currentUser.isAdmin;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="login"
              element={admin ? <Navigate to="/" /> : <Login />}
            />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={userInputs} text="Añadir Nuevo Usuario" />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} text="Añadir Nuevo Producto" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
