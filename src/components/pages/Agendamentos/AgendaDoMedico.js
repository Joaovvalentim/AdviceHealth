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
  const [agendamentos, setagendamentos] = useState([{}]);
  const [selectedMedico, setSelectedMedico] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSave = () => {
    if (!nome || !crm || !especialidade) {
      alert('Preencha todos os campos');
      return;
    }
    const newId = medicos.length + 1;
    const newMedico = { id: newId, nome, crm, especialidade, agendamentos };
    setMedicos([...medicos, newMedico]);
    setNome('');
    setCrm('');
    setEspecialidade('');
    setagendamentos([{}])
    handleClose();
  };

  const handleDelete = (id) => {
    const updatedMedicos = medicos.filter((medico) => medico.id !== id);
    setMedicos(updatedMedicos);
  };

  const handleOpenAgenda = (id) => {
    const selected = medicos.find((medico) => medico.id === id);
    setSelectedMedico(selected);
    console.log("aqui")
  };

  const handleCloseAgenda = () => {
    setSelectedMedico(null);
  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
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
                <Button variant="primary" onClick={() => handleOpenAgenda(medico.id)}>Agenda</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(medico.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleShow}>
        Adicionar Novo Médico
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Novo Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do médico"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCRM">
              <Form.Label>CRM</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CRM do médico"
                value={crm}
                onChange={(e) => setCrm(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEspecialidade">
              <Form.Label>Especialidade</Form.Label>
              <Form.Control
                as="select"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              >
                <option value="">Selecione uma opção</option>
                <option value="Cardiologia">Cardiologia</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Pediatria">Pediatria</option>
                <option value="Neurologia">Neurologia</option>
                <option value="Oncologia">Oncologia</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      {selectedMedico && (
        <AgendaMedico
          show={selectedMedico !== null}
          onHide={handleCloseAgenda}
          medico={selectedMedico}
          handleCloseAgenda={handleCloseAgenda}
        />
      )}
    </Container>
  );
};

export default MedicosList;