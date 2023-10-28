import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1 className="text-center my-4">Contacto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Escribe tu mensaje"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
