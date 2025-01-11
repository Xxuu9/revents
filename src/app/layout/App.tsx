/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "semantic-ui-react";
import Navbar from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
