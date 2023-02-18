import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import AgendaMedico from './AgendaModal';
import { BsTrash } from "react-icons/bs";
import { TfiAgenda } from "react-icons/tfi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import './AgendaDoMedico.css'


const MedicosList = () => {

  //Criando estado inicial para a lista de médicos e seus agendamentos
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
    {
      id: 4,
      nome: 'Dr. Pedro',
      crm: '645981',
      especialidade: 'Neurologia',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Brenner', observacoes: 'irá se atrasar 15 minutos' },
        { id: 2, data: '2023-06-04', horario: '11:00', paciente: 'Victor', observacoes: 'irá se atrasar 25 minutos' },
        { id: 3, data: '2023-10-06', horario: '15:00', paciente: 'Otavio', observacoes: 'irá se atrasar 45 minutos' },
        { id: 4, data: '2023-29-02', horario: '16:00', paciente: 'Monica', observacoes: 'Realizar Exame' },
        { id: 5, data: '2023-17-04', horario: '16:30', paciente: 'Isabela', observacoes: 'Retorno' },
        { id: 6, data: '2023-17-06', horario: '18:00', paciente: 'Pedro', observacoes: 'Retorno' }
      ]
    },
    {
      id: 5,
      nome: 'Dr. Kleber',
      crm: '654321',
      especialidade: 'Cirurgião Odontológico',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Cleber', observacoes: 'Nova Consulta' },
        { id: 2, data: '2023-06-04', horario: '11:00', paciente: 'Karol', observacoes: 'Rtorno' },
        { id: 3, data: '2023-10-06', horario: '15:00', paciente: 'Edilaine', observacoes: 'Retorno' },

      ]
    },
    {
      id: 6,
      nome: 'Dra. Roberta',
      crm: '321895',
      especialidade: 'Cirurgião Cardiovascular',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Thales', observacoes: 'Cirurgia' },

      ]
    },
    {
      id: 7,
      nome: 'Dra. Carol',
      crm: '984523',
      especialidade: 'Pediatra',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Miguel ', observacoes: '' },
        { id: 2, data: '2023-03-04', horario: '11:00', paciente: 'Arthur', observacoes: '' },
        { id: 3, data: '2023-03-06', horario: '15:00', paciente: 'Gael', observacoes: '' },
        { id: 4, data: '2023-03-08', horario: '09:00', paciente: 'Heitor ', observacoes: '' },
        { id: 5, data: '2023-03-10', horario: '11:00', paciente: 'Helena', observacoes: '' },
        { id: 6, data: '2023-03-12', horario: '15:00', paciente: 'Alice ', observacoes: '' },
        { id: 7, data: '2023-03-14', horario: '09:00', paciente: 'Theo ', observacoes: '' },
        { id: 8, data: '2023-03-16', horario: '11:00', paciente: 'Laura ', observacoes: '' },
        { id: 9, data: '2023-03-18', horario: '15:00', paciente: 'Davi ', observacoes: '' }
      ]
    },
    {
      id: 8,
      nome: 'Dr. José',
      crm: '051236',
      especialidade: 'Cirurgião Plástico',
      agendamentos: [
        { id: 1, data: '2023-03-02', horario: '09:00', paciente: 'Gabriel ', observacoes: '' },
        { id: 2, data: '2023-03-04', horario: '11:00', paciente: 'Laura ', observacoes: '' },
        { id: 3, data: '2023-03-06', horario: '15:00', paciente: 'Maria Alice ', observacoes: '' },
        { id: 4, data: '2023-03-04', horario: '11:00', paciente: 'Valentina ', observacoes: '' },
        { id: 5, data: '2023-03-06', horario: '15:00', paciente: 'Maria Clara', observacoes: '' }
      ]
    },
  ]);

  // Declaração de estados usando o Hook useState
  const [showModal, setShowModal] = useState(false); // estado para controlar a exibição do modal
  const [nome, setNome] = useState(''); // estado para armazenar o nome do médico
  const [crm, setCrm] = useState(''); // estado para armazenar o CRM do médico
  const [especialidade, setEspecialidade] = useState(''); // estado para armazenar a especialidade do médico
  const [selectedMedico, setSelectedMedico] = useState(null); // estado para armazenar o médico selecionado
  const [showAgendamentoModal, setShowAgendamentoModal] = useState(false); // estado para controlar a exibição do modal de agendamento

  // Funções que manipulam as mudanças nos estados de nome, CRM e especialidade
  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };
  const handleCrmChange = (e) => {
    setCrm(e.target.value);
  };
  const handleEspecialidadeChange = (e) => {
    setEspecialidade(e.target.value);
  };

  // Função que remove um médico da lista a partir do seu id
  const handleDelete = (id) => {
    const updatedMedicos = medicos.filter((medico) => medico.id !== id);
    setMedicos(updatedMedicos);
  };

  // Funções para controlar a exibição do modal de cadastro de médicos
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Função para adicionar um novo médico à lista
  const handleAddMedico = () => {
    const newMedico = {
      id: medicos.length + 1,
      nome: nome,
      crm: crm,
      especialidade: especialidade,
      agendamentos: []
    };
    setMedicos([...medicos, newMedico]); // Adiciona o novo médico à lista de médicos
    setShowModal(false); // Fecha o modal de cadastro de médicos
    setNome(''); // Limpa o estado do nome do médico
    setCrm(''); // Limpa o estado do CRM do médico
    setEspecialidade(''); // Limpa o estado da especialidade do médico
  };

  // Funções para controlar a exibição do modal de agendamento
  const handleShowAgendaModal = (medico) => {
    setSelectedMedico(medico); // Armazena o médico selecionado no estado selectedMedico
    setShowAgendamentoModal(true); // Exibe o modal de agendamento
  };
  const handleCloseAgendaModal = () => {
    setSelectedMedico(null); // Limpa o estado do médico selecionado
    setShowAgendamentoModal(false); // Fecha o modal de agendamento
  };
  const handleCloseAgenda = () => {
    setSelectedMedico(null); // Limpa o estado do médico selecionado
    setShowAgendamentoModal(false); // Fecha o modal de agendamento
  };

  // Esta função é responsável por adicionar um novo agendamento ao médico selecionado
  // Ela recebe os parâmetros de data, horário, paciente e observações que serão usados para criar o novo agendamento
  const handleAddAgendamento = (data, horario, paciente, observacoes) => {
    const newAgendamento = {
      id: selectedMedico.agendamentos.length + 1,
      data: data,
      horario: horario,
      paciente: paciente,
      observacoes: observacoes
    };
    // Um novo objeto de agendamento é criado com um ID baseado no comprimento da matriz de agendamentos existente do médico selecionado
    // Em seguida, a matriz de médicos é mapeada para encontrar o médico selecionado e o novo agendamento é adicionado à matriz de agendamentos do médico
    // Finalmente, a matriz de médicos atualizada é usada para atualizar o estado do aplicativo e o modal de agendamento é fechado
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
      <Table striped bordered hover className='tabela-agenda'>
        <thead>
          <tr>
            <th>ID</th>
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
              <td className='button-acoes'>
                <div className='button-agenda'>
                  {/* Botão para abrir modal de agendamento */}
                  <Button variant="primary" onClick={() => handleShowAgendaModal(medico)} > <TfiAgenda /> Agenda</Button>
                </div>
                {/* Botão para excluir médico */}
                <Button variant="danger" onClick={() => handleDelete(medico.id)}><BsTrash />  Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='button-agenda'>
        {/* Botão para abrir modal de adição de médico */}
        <Button variant="primary" onClick={handleShowModal}><BsFillPersonPlusFill /> Adicionar Médico</Button>

      </div>

      {/* Modal de adição de médico */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Médico</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Campo de entrada para nome do médico */}
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome do médico" value={nome} onChange={handleNomeChange} />
            </Form.Group>

            {/* Campo de entrada para CRM do médico */}
            <Form.Group controlId="formCrm">
              <Form.Label>CRM</Form.Label>
              <Form.Control type="text" placeholder="Digite o CRM do médico" value={crm} onChange={handleCrmChange} />
            </Form.Group>

            {/* Campo de entrada para especialidade do médico */}
            <Form.Group controlId="formEspecialidade">
              <Form.Label>Especialidade</Form.Label>
              <Form.Control type="text" placeholder="Digite a especialidade do médico" value={especialidade} onChange={handleEspecialidadeChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Botão para fechar o modal de adição de médico */}
          <Button variant="secondary" onClick={handleCloseModal}>Fechar</Button>
          {/* Botão para adicionar médico */}
          <div className='button-agenda'>
            <Button variant="primary" onClick={handleAddMedico}>Adicionar</Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Componente de agendamento de médico */}
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