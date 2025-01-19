import { Container } from "semantic-ui-react";
import Navbar from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import { useAppDispatch } from "../store/store";
import ModalManager from "../common/modals/ModalManager";
import { onAuthStateChanged } from "firebase/auth";
import { logout, signIn } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { auth } from "../config/firebase";

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, {
      next: (user) => {
        if (user) {
          dispatch(signIn(user));
        } else {
          dispatch(logout());
        }
      },
      error: (error) => console.log(error),
      complete: () => {},
    });
  }, [dispatch]);

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <ModalManager />
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
