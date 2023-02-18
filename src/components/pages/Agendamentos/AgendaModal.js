import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import './AgendaModal.css'
// Componente de modal para adicionar agendamento para o médico selecionado
const AgendaModal = ({ show, handleCloseAgenda, medico, handleAddAgendamento }) => {

  // Adiciona estado para controlar o formulário de agendamento
  const [formData, setFormData] = useState({
    data: '',
    horario: '',
    paciente: '',
    observacoes: '',
  });

  // Adiciona estado para controlar a visibilidade do formulário de agendamento
  const [agendarAtivo, setAgendarAtivo] = useState(false);

  // Função para lidar com a mudança de entrada no formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddAgendamento(formData.data, formData.horario, formData.paciente, formData.observacoes);
    setFormData({
      data: '',
      horario: '',
      paciente: '',
      observacoes: '',
    });
  };

  // Função para lidar com a abertura do formulário de agendamento
  const handleAbrirAgendar = () => {
    setAgendarAtivo(true);
  }

  // Função para lidar com o fechamento do formulário de agendamento
  const handleFecharAgendar = () => {
    setAgendarAtivo(false);
    handleCloseAgenda();
  }

  // Função temporária para exibir um alerta ao clicar no botão de adicionar agendamento
  const handleAlert = () => {
    alert("Adicionar novos agendamentos ainda está sendo implementado!")
  }
  return (
    <Modal show={show} onHide={handleFecharAgendar} className='modal-xl modal-agenda'  >
      <Modal.Header closeButton>
        <Modal.Title>Agenda do Médico {medico.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {medico.agendamentos.map((agendamento) => (
              <tr key={agendamento.id}>
                <td>{agendamento.paciente}</td>
                <td>{agendamento.data}</td>
                <td>{agendamento.horario}</td>
                <td>{agendamento.observacoes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {agendarAtivo && ( // Renderiza o formulário de agendamento somente se agendarAtivo for verdadeiro
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Modal.Title>Novo Agendamento</Modal.Title>
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
            <div className='button-novo-agendamento'>
              <Button onClick={handleAlert}><AiOutlineCheck /> Agendar agora</Button>
            </div>

          </Form>
        )}
        {!agendarAtivo && ( // Renderiza o botão de Agendar somente se agendarAtivo for falso
          <div className='button-agendar'>
            <Button variant="primary" onClick={handleAbrirAgendar}> <AiOutlinePlus /> Agendar </Button>
          </div>

        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleFecharAgendar}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AgendaModal;

