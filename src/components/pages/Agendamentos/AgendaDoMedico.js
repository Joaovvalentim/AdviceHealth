import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';



const MedicosList = () => {

  const [medicos, setMedicos] = useState([
    { id: 1, nome: 'Dr. João', crm: '123456', especialidade: 'Cardiologia' },
    { id: 2, nome: 'Dra. Maria', crm: '654321', especialidade: 'Dermatologia' },
    { id: 3, nome: 'Dr. José', crm: '789012', especialidade: 'Pediatria' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSave = () => {
    const newId = medicos.length + 1;
    const newMedico = { id: newId, nome, crm, especialidade };
    medicos.push(newMedico);
    setNome('');
    setCrm('');
    setEspecialidade('');
    handleClose();
  };

  const handleDelete = (id) => {
    const updatedMedicos = medicos.filter((medico) => medico.id !== id);
    setMedicos(updatedMedicos);
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>CRM</th>
            <th>Especialidade</th>
            <th>Ação</th>
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
                type="text"
                placeholder="Digite a especialidade do médico"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              />
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
    </Container>
  );
};

export default MedicosList;
