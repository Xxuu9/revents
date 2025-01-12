/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "semantic-ui-react";
import Navbar from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import { Provider } from "react-redux";
import { store } from "../store/store";

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
