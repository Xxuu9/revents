/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import Navbar from "./nav/NavBar";
import { useState } from "react";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <h1>Welcome</h1>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
