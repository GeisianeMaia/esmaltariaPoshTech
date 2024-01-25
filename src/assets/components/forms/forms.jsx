import { useState } from "react";
import { Link } from 'react-router-dom';
import "./forms.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import moment from 'moment';


const Forms = (time) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [typeService, setTypeService] = useState("spa");
  const [isOpen, setIsOpen] = useState(false);
  const [formValidated, setFormValidated] = useState(false);

  function handleValidateForms(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setIsOpen(true);
      newRegistrerScheduleTime();
    }

    setFormValidated(true);
  }


  const newRegistrerScheduleTime = () => {
    const dateFormatted = moment(time.data).format('DD/MM/YYYY');
    const data = {
      tipoServico: typeService,
      data: dateFormatted,
      horario: time.time,
      nomeCliente: fullName,
      emailCliente: email,
      telefoneCliente: phone,
    };
    try {
      const response = axios.post("http://localhost:8080/agenda", data, {
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5173",
        },
      });

      return response;
    } catch (error) {
      console.error("Erro ao realizar a requisição POST:", error);
    }
  };

  function handleBack() {
    time.onBack();
  }

  return (
    <>
      <div className="textNext" onClick={handleBack}>
        Voltar
      </div>

      <Form className="form" noValidate validated={formValidated} onSubmit={handleValidateForms}>
        <h3>Dados do cliente</h3>
        <Form.Group className="mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            placeholder="Digite seu nome completo"
            pattern="^[a-zA-ZÀ-ÿ\s'-çÇáéíóúÁÉÍÓÚãõÃÕâêîôÂÊÎÔäëïöüÄËÏÖÜ]+ [a-zA-ZÀ-ÿ\s'-çÇáéíóúÁÉÍÓÚãõÃÕâêîôÂÊÎÔäëïöüÄËÏÖÜ]+$"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor, insira um nome válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Digite seu e-mail"
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6} ?"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor, insira um email válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            placeholder="(11) 99999-9999"
            pattern="^\([1-9]{2}\) (?:[2-9][0-9]{3,4}-[0-9]{4}|9[0-9]{4}-[0-9]{4})$"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor, insira um número de telefone válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            Selecione o tipo de serviço
          </Form.Text>
          <Form.Check
            onClick={() => {
              setTypeService("pé");
            }}
            type="radio"
            label="Pé"
            name="typeService"
            checked={typeService === "pé"}
          />
          <Form.Check
            onClick={() => {
              setTypeService("mão");
            }}
            type="radio"
            label="Mão"
            name="typeService"
            checked={typeService === "mão"}
          />
          <Form.Check
            onClick={() => {
              setTypeService("spa");
            }}
            type="radio"
            label="Spa Pé e Mão"
            name="typeService"
            checked={typeService === "spa"}
          />
        </Form.Group>
        <Button className="buttonSchedule" type="submit">
          Agendar
        </Button>
      </Form>

      {isOpen && (
        <>
        <div className="modal-shadow"></div>
        <Alert variant="success">
          <Alert.Heading>Agendadado com sucesso!</Alert.Heading>
          <p>Em alguns minutos você receberá um e-mail de confirmação.</p>
          <hr />
          <div className="d-flex justify-content-end">
          <Link to="/">
            <Button onClick={() => setIsOpen(false)} variant="outline-success">
              fechar
            </Button>
            </Link>
          </div>
        </Alert>
        </>
      )}
    </>
  );
};

export default Forms;
