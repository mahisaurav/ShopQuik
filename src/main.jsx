import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import "./index.css";
import Layout from "./Layout.jsx";
import Content from "./components/Content.jsx";
import Shirt from "./components/Shirt/Shirt.jsx";
import Clothes from "./components/Clothes/clothes.jsx";
import Accessories from "./components/Accessories/Accessories.jsx";
import Tie from "./components/Tie/Tie.jsx";
import Socks from "./components/Socks/Socks.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Register from "./components/Register/Register.jsx";  // Add this line
import { UserProvider } from "./UserContext.jsx";             // Already imported ✅

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Content />} />
      <Route path="shirts" element={<Shirt />} />
      <Route path="clothes" element={<Clothes />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="socks" element={<Socks />} />
      <Route path="tie" element={<Tie />} />
      <Route path="admin" element={<Admin />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider> {/* Wrap everything inside UserProvider */}
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);



// // main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route
// } from "react-router-dom";

// import "./index.css";
// import Layout from "./Layout.jsx";
// import Content from "./components/Content.jsx";
// import Shirt from "./components/Shirt/Shirt.jsx";
// import Clothes from "./components/Clothes/clothes.jsx";
// import Accessories from "./components/Accessories/Accessories.jsx";
// import Tie from "./components/Tie/Tie.jsx";
// import Socks from "./components/Socks/Socks.jsx";
// import Admin from "./components/Admin/Admin.jsx";
// import { UserProvider } from "./UserContext";



// const router = createBrowserRouter(
//   createRoutesFromElements(

//     <Route path="/" element={<Layout />}>

//       <Route index element={<Content />} />
//       <Route path="shirts" element={<Shirt />} />
//       <Route path="clothes" element={<Clothes />} />
//       <Route path="accessories" element={<Accessories />} />
//       <Route path="socks" element={<Socks />} />
//       <Route path="tie" element={<Tie />} />
//       <Route path="admin" element={<Admin />} />
//       <Route path="register" element={<Register />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
