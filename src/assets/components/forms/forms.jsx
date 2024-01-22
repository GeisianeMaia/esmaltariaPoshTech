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
  const [validateFullName, setValidateFullName] = useState(false);
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [validatePhone, setValidatePhone] = useState(false);
  const [typeService, setTypeService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  function handleValidateForms() {
    const regexFullName = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexPhone =
      /^\([1-9]{2}\) (?:[2-9][0-9]{3,4}-[0-9]{4}|9[0-9]{4}-[0-9]{4})$/;
    setValidateFullName(regexFullName.test(fullName));
    setValidateEmail(regexEmail.test(email));
    setValidatePhone(regexPhone.test(phone));

    if (validateFullName && validateEmail && validatePhone) {
      setIsOpen(true);
      formatedDate();
      setIsInvalid(false);
    } else {
      setIsOpen(false);
      setIsInvalid(true);
      setTimeout(() => {
        setIsInvalid(false);
      }, "3000");
    }
  }

  function formatedDate() {
    const dateFormated = moment(time.data).format('DD/MM/YYYY');

    newRegistrerScheduleTime(dateFormated);
  }
  const newRegistrerScheduleTime = async (formatDate) => {
    const data = {
      tipoServico: typeService,
      data: formatDate,
      horario: time.time,
      nomeCliente: fullName,
      emailCliente: email,
      telefoneCliente: phone,
    };
    try {
      const response = await axios.post("http://localhost:8080/agenda", data, {
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

      <Form className="form">
        <h3>Dados do cliente</h3>
        <Form.Group className="mb-3">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            placeholder="Digite seu nome completo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Digite seu e-mail"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="phone"
            placeholder="(11) 99999-9999"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
          />
          <Form.Check
            onClick={() => {
              setTypeService("mão");
            }}
            type="radio"
            label="Mão"
            name="typeService"
          />
          <Form.Check
            onClick={() => {
              setTypeService("spa");
            }}
            type="radio"
            label="Spa Pé e Mão"
            name="typeService"
          />
        </Form.Group>
        <Button className="buttonSchedule" onClick={handleValidateForms}>
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

      {isInvalid && (
        <Alert variant="danger">
          <Alert.Heading> Dados incorretos. Verifique novamente!</Alert.Heading>
        </Alert>
      )}
    </>
  );
};

export default Forms;
