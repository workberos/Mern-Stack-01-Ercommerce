import React, { Fragment } from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map(route => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })}
        </Routes>
      </Router>
    </div>
  )
}