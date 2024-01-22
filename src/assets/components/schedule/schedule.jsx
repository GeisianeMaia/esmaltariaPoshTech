import { Container } from "react-bootstrap";
import "./schedule.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "react-calendar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Forms from "../forms/forms";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [viewForm, setViewForm] = useState(false);

  function handleSelectTime(event) {
    const valueTime = event.target.innerText;
    setTime(valueTime);
  }

  function handleNextStepToScheduleTime() {
    time && value ? setViewForm(true) : setViewForm(false);
  }

  function handleBackToCalendar() {
    setViewForm(false);
  }

  return (
    <>
      {!viewForm ? (
        <Container className="calendar" fluid="md">
          <Row>
            <h3>Selecione uma data e horário</h3>
            <Col>
              <Calendar onChange={onChange} value={value} className="mb-6" />
            </Col>
            <Col>
              {/* <div>{dateFormated}</div> */}
              <Container className="time">
                <Row>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime}>
                        10:45
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime}>
                        11:45
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime} variant="primary">
                        13:00
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime} variant="secondary">14:00</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime} variant="primary">
                        15:30
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col>
                    <ButtonGroup className="mb-4 d-grid gap-2" aria-label="Basic example">
                      <Button onClick={handleSelectTime} variant="secondary">17:00</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Container>
              <Button
                className="buttonNext"
                onClick={handleNextStepToScheduleTime}
              >
                Próximo
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Forms time={time} date={value} onBack={handleBackToCalendar} />
      )}
    </>
  );
};

export default Schedule;
