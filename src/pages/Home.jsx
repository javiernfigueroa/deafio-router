import { Container } from "react-bootstrap";
import happyCakeImage from "../assets/cake.png";

function Home() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>Bienvenido a Happy Cake</h1>
      <p>El lugar de los pasteles felices</p>
      <img src={happyCakeImage} alt="Happy Cake" style={{ maxWidth: "100%" }} />
    </Container>
  );
}

export default Home;
