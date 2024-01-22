import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className="footer">
      <Container>
        <Row>
          <Col>
            <Card.Body>
              <Card.Title>Contato</Card.Title>
              <Card.Text>(11) 99999-9999</Card.Text>
              <Card.Text>esmaltaria@techchallenge.com</Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Endereço</Card.Title>
              <Card.Text>Av.Paulista, 00 - São Paulo - SP</Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Horário</Card.Title>
              <Card.Text>Seg - Sex: 10:00 - 18:00</Card.Text>
              <Card.Text>Sáb - Dom: 10:00 - 14:00</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Footer;
