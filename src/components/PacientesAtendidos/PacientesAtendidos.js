import './PacientesAtendidos.css';
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsFillPersonCheckFill } from 'react-icons/bs';

function PacientesAtendidos(props) {
  const [showEditarPacientesModal, setShowEditarPacientesModal] = useState(false);
  const [novosPacientes, setNovosPacientes] = useState(props.pacientes);

  const handleEditarPacientes = () => {
    setShowEditarPacientesModal(true);
  };
  const handleSalvarPacientes = () => {
    setShowEditarPacientesModal(false);
    props.onEditarPacientes(novosPacientes);
  };
  const handleClose = () => {
    setShowEditarPacientesModal(false);
  };
  const handlePacientesChange = (event) => {
    setNovosPacientes(event.target.value);
  };
  return (
    <>
      <div className='container-agendamento'>
        <h4>Pacientes Atendidos</h4>
        <span className='icon'><BsFillPersonCheckFill /> {props.pacientes}</span>
        <div className='button-footer'>
          <Button variant="primary" onClick={handleEditarPacientes}>
            Editar
          </Button>
        </div>
      </div>
      <Modal show={showEditarPacientesModal} onHide={handleClose}>
        <Modal.Header closeButton>
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
                value={novosPacientes}
                onChange={handlePacientesChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSalvarPacientes}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PacientesAtendidos;