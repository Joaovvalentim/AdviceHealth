import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import './Agenda.css'
function Agenda() {
    // State para armazenar a lista de pacientes, com dados iniciais pré-definidos
    const [pacientes, setPacientes] = useState([
        { id: 1, nome: "João", convenio: "Unimed", procedimento: "Consulta", horario: "14:00" },
        { id: 2, nome: "Mirian", convenio: "Bradesco", procedimento: "Exame", horario: "15:30" },
        { id: 3, nome: "Karol", convenio: "Sulamérica", procedimento: "Cirurgia", horario: "18:00" }
    ]);

    // State para armazenar o próximo ID a ser utilizado
    const [id, setId] = useState(4);

    // State para controlar se o modal de adicionar paciente está visível ou não
    const [showModal, setShowModal] = useState(false);

    // State para armazenar os dados do novo paciente a ser adicionado
    const [novoPaciente, setNovoPaciente] = useState({ nome: "", convenio: "", procedimento: "", horario: "" });

    // Handler para exibir o modal de adicionar paciente
    const handleShowModal = () => {
        setShowModal(true);
    };

    // Handler para fechar o modal de adicionar paciente
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handler para adicionar um novo paciente à lista
    const handleAddPaciente = () => {
        // Adiciona o novo paciente à lista de pacientes
        setPacientes([...pacientes, { ...novoPaciente, id }]);
        // Limpa o objeto novoPaciente para permitir a adição de novos pacientes
        setNovoPaciente({ nome: "", convenio: "", procedimento: "", horario: "" });
        // Incrementa o ID para ser utilizado no próximo paciente a ser adicionado
        setId(id + 1);
        // Fecha o modal de adicionar paciente
        handleCloseModal();
    };

    // Handler para excluir um paciente da lista
    const handleDeletePaciente = (id) => {
        // Filtra a lista de pacientes, removendo o paciente com o ID especificado
        const newPacientes = pacientes.filter((paciente) => paciente.id !== id);
        // Atualiza a lista de pacientes
        setPacientes(newPacientes);
    };

    // Handler para atualizar o valor do campo nome do novo paciente a ser adicionado
    const handleNomeChange = (event) => {
        setNovoPaciente({ ...novoPaciente, nome: event.target.value });
    };

    // Handler para atualizar o valor do campo convênio do novo paciente a ser adicionado
    const handleConvenioChange = (event) => {
        setNovoPaciente({ ...novoPaciente, convenio: event.target.value });
    };

    // Handler para atualizar o valor do campo procedimento do novo paciente a ser adicionado
    const handleProcedimentoChange = (event) => {
        setNovoPaciente({ ...novoPaciente, procedimento: event.target.value });
    };

    // Handler para atualizar o valor do campo horário do novo paciente a ser adicionado
    const handleHorarioChange = (event) => {
        setNovoPaciente({ ...novoPaciente, horario: event.target.value });
      };

      return (
        <div className="container-agenda">
            <h1>Agenda do Dia</h1> {/* Título da página */}
            <Button variant="primary" onClick={handleShowModal} className="button-add">Adicionar paciente</Button>{/* Botão para abrir o modal de adição de paciente */}
            <Table striped bordered hover> {/* Tabela de pacientes */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Convênio</th>
                        <th>Procedimento</th>
                        <th>Horário</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeamento dos pacientes para exibição na tabela */}
                    {pacientes.map((paciente) => ( 
                        <tr key={paciente.id}>
                            <td>{paciente.id}</td>
                            <td>{paciente.nome}</td>
                            <td>{paciente.convenio}</td>
                            <td>{paciente.procedimento}</td>
                            <td>{paciente.horario}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeletePaciente(paciente.id)}>Excluir</Button> {/* Botão para excluir o paciente */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}> {/* Modal para adicionar um novo paciente */}
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" value={novoPaciente.nome} onChange={handleNomeChange} /> {/* Campo de entrada para o nome do paciente */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Convênio</Form.Label>
                        <Form.Control type="text" value={novoPaciente.convenio} onChange={handleConvenioChange} /> {/*Campo de entrada para o convênio do paciente */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Procedimento</Form.Label>
                        <Form.Control type="text" value={novoPaciente.procedimento} onChange={handleProcedimentoChange} /> {/* Campo de entrada para o procedimento do paciente */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Horario</Form.Label>
                        <Form.Control type="text" value={novoPaciente.horario} onChange={handleHorarioChange} /> {/* Campo de entrada para o horário do paciente */}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar {/* Botão para fechar o modal */}
                    </Button>
                    <Button variant="primary" onClick={handleAddPaciente}>
                        Adicionar {/* Botão para adicionar o novo paciente */}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Agenda