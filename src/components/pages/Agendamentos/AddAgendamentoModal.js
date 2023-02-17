import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddAgendamentoModal = ({ show, handleClose, handleAddAgendamento }) => {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [paciente, setPaciente] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleHorarioChange = (event) => {
    setHorario(event.target.value);
  };

  const handlePacienteChange = (event) => {
    setPaciente(event.target.value);
  };

  const handleObservacoesChange = (event) => {
    setObservacoes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAgendamento = {
      data,
      horario,
      paciente,
      observacoes
    };
    handleAddAgendamento(newAgendamento);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Agendamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="data">
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" value={data} onChange={handleDataChange} required />
          </Form.Group>
          <Form.Group controlId="horario">
            <Form.Label>Horário</Form.Label>
            <Form.Control type="time" value={horario} onChange={handleHorarioChange} required />
          </Form.Group>
          <Form.Group controlId="paciente">
            <Form.Label>Paciente</Form.Label>
            <Form.Control type="text" value={paciente} onChange={handlePacienteChange} required />
          </Form.Group>
          <Form.Group controlId="observacoes">
            <Form.Label>Observações</Form.Label>
            <Form.Control as="textarea" value={observacoes} onChange={handleObservacoesChange} rows={3} />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" type="submit">Adicionar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAgendamentoModal;
