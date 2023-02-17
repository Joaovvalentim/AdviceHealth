import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import AgendaMedico from './AgendaModal';

const MedicosList = () => {
  const [medicos, setMedicos] = useState([
    {
      id: 1,
      nome: 'Dr. João',
      crm: '123456',
      especialidade: 'Cardiologia',
      agendamentos: [
        { id: 1, data: '2023-03-01', horario: '08:00', paciente: 'João', observacoes: 'irá se atrasar 15 minutos' },
        { id: 2, data: '2023-03-03', horario: '10:00', paciente: 'Maria', observacoes: 'irá se atrasar 15 minutos' },
        { id: 3, data: '2023-03-05', horario: '14:00', paciente: 'Eduarda', observacoes: 'irá se atrasar 15 minutos' }
      ]
    },
    {
      id: 2,
      nome: 'Dra. Maria',
      crm: '654321',
      especialidade: 'Dermatologia',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Cleber', observacoes: 'irá se atrasar 15 minutos' },
        { id: 2, data: '2023-03-04', horario: '11:00', paciente: 'Karol', observacoes: 'irá se atrasar 15 minutos' },
        { id: 3, data: '2023-03-06', horario: '15:00', paciente: 'Edilaine', observacoes: 'irá se atrasar 15 minutos' }
      ]
    },
    {
      id: 3,
      nome: 'Dr. José',
      crm: '789012',
      especialidade: 'Pediatria',
      agendamentos: [
        { id: 1, data: '2023-03-07', horario: '08:30', paciente: 'Fabio', observacoes: '' },
        { id: 2, data: '2023-03-09', horario: '10:30', paciente: 'José', observacoes: '' },
        { id: 3, data: '2023-03-11', horario: '14:30', paciente: 'Ana', observacoes: '' }
      ]
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };
  const handleDelete = (id) => {
    const updatedMedicos = medicos.filter((medico) => medico.id !== id);
    setMedicos(updatedMedicos);
  };

  const handleCrmChange = (e) => {
    setCrm(e.target.value);
  };

  const handleEspecialidadeChange = (e) => {
    setEspecialidade(e.target.value);
  };

  const handleShowModal = () => {

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddMedico = () => {
    const newMedico = {
      id: medicos.length + 1,
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      agendamentos: []
    };
    setMedicos([...medicos, newMedico]);
    setShowModal(false);
    setNome('');
    setCrm('');
    setEspecialidade('');
  };

  const handleShowAgendaModal = (medico) => {
    setSelectedMedico(medico);
    setShowAgendamentoModal(true);
  };

  const handleCloseAgendaModal = () => {
    setSelectedMedico(null);
    setShowAgendamentoModal(false);
  };
  const handleCloseAgenda = () => {
    setSelectedMedico(null);
    setShowAgendamentoModal(false);
  };
  const handleAddAgendamento = (data, horario, paciente, observacoes) => {
    const newAgendamento = {
      id: selectedMedico.agendamentos.length + 1,
      data: data,
      horario: horario,
      paciente: paciente,
      observacoes: observacoes
    };
    const updatedMedicos = medicos.map((medico) => {
      if (medico.id === selectedMedico.id) {
        medico.agendamentos.push(newAgendamento);
      }
      return medico;
    });
    setMedicos(updatedMedicos);
    setShowAgendamentoModal(false);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CRM</th>
            <th>Especialidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.id}>
              <td>{medico.id}</td>
              <td>{medico.nome}</td>
              <td>{medico.crm}</td>
              <td>{medico.especialidade}</td>
              <td>
                <Button variant="primary" onClick={() => handleShowAgendaModal(medico)}>Agenda</Button>
                <Button variant="danger" onClick={() => handleDelete(medico.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShowModal}>Adicionar Médico</Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do médico" value={nome} onChange={handleNomeChange} />
            </Form.Group>

            <Form.Group controlId="formCrm">
              <Form.Label>CRM</Form.Label>
              <Form.Control type="text" placeholder="Digite o CRM do médico" value={crm} onChange={handleCrmChange} />
            </Form.Group>

            <Form.Group controlId="formEspecialidade">
              <Form.Label>Especialidade</Form.Label>
              <Form.Control type="text" placeholder="Digite a especialidade do médico" value={especialidade} onChange={handleEspecialidadeChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Fechar</Button>
          <Button variant="primary" onClick={handleAddMedico}>Adicionar</Button>
        </Modal.Footer>
      </Modal>

      {selectedMedico && (
        <AgendaMedico
          show={showAgendamentoModal}
          handleClose={handleCloseAgendaModal}
          handleAddAgendamento={handleAddAgendamento}
          medico={selectedMedico}
          handleCloseAgenda={handleCloseAgenda}
        />
      )}
    </Container>
  );
};

export default MedicosList;