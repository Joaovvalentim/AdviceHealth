import React from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

const AgendaModal = ({ show, handleCloseAgenda, medico }) => {

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
        <Button variant="secondary" onClick={handleCloseAgenda}>Fechar</Button>
      </Modal.Body>
    </Modal>
  );
};

export default AgendaModal;