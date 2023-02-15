import './AgendamentosDoDia.css';
import React, { useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { Button, Modal } from "react-bootstrap";
function AgendamentosDoDia(props) {
    const [showEditarAgendamentosModal, setShowEditarAgendamentosModal] = useState(false);
    const [novoAgendamento, setNovoAgendamento] = useState(props.agendamentos);

    const handleEditarAgendamentos = () => {
        setShowEditarAgendamentosModal(true);
    };

    const handleSalvarAgendamentos = () => {
        setShowEditarAgendamentosModal(false);
        props.onEditarAgendamentos(novoAgendamento);
    };
    const handleClose = () => {
        setShowEditarAgendamentosModal(false);
    };
    const handleAgendamentosChange = (event) => {
        setNovoAgendamento(event.target.value);
    };
    return (
        <>
            <div className='container-agendamento'>
                <h4>Agendamentos do Dia</h4>
                <span className='icon'><BsFillPersonFill /> {props.agendamentos}</span>
                <div className='button-footer'>
                    <Button variant="primary" onClick={handleEditarAgendamentos}>
                        Editar
                    </Button>
                </div>
            </div>
            <Modal show={showEditarAgendamentosModal} onHide={handleClose}>
                <Modal.Header closeButton='X'>
                    <Modal.Title>Editar Pacientes Atendidos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="pacientesInput">Novo valor:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pacientesInput"
                                value={novoAgendamento}
                                onChange={handleAgendamentosChange}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSalvarAgendamentos}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AgendamentosDoDia;