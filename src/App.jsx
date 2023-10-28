import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <Router>
      <Container>
        <NavbarComponent />
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
