import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AgendaModal = ({ show, handleCloseAgenda, medico, handleAddAgendamento }) => {
  const [formData, setFormData] = useState({
    data: '',
    horario: '',
    paciente: '',
    observacoes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddAgendamento(formData);
    setFormData({
      data: '',
      horario: '',
      paciente: '',
      observacoes: '',
    });
  };

  return (
    <Modal show={show} onHide={handleCloseAgenda}>
      <Modal.Header closeButton>
        <Modal.Title>Agenda do Médico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Data</th>
              <th>Horário</th>
              <th>Paciente</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {medico.agendamentos.map((agendamento) => (
              <tr key={agendamento.id}>
                <td>{agendamento.data}</td>
                <td>{agendamento.horario}</td>
                <td>{agendamento.paciente}</td>
                <td>{agendamento.observacoes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name="data"
              value={formData.data}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Horário</Form.Label>
            <Form.Control
              type="time"
              name="horario"
              value={formData.horario}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Paciente</Form.Label>
            <Form.Control
              type="text"
              name="paciente"
              value={formData.paciente}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Observações</Form.Label>
            <Form.Control
              as="textarea"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button type="submit">Agendar</Button>
        </Form>
        <Button variant="secondary" onClick={handleCloseAgenda}>
          Fechar
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default AgendaModal;
