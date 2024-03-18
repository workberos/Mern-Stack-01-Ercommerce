import React from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

export default function App() {

  return (
    <div>
      <HeaderComponent/>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </Router>
    </div>
  )
}