import './PacientesAtendidos.css';
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsFillPersonCheckFill } from 'react-icons/bs';

function PacientesAtendidos(props) {
  // Define o estado do componente para controlar a exibição do modal
  const [showEditarPacientesModal, setShowEditarPacientesModal] = useState(false);
  // Define o estado do componente para armazenar a lista de pacientes atendidos
  const [novosPacientes, setNovosPacientes] = useState(props.pacientes);

  // Define a função para exibir o modal de edição de pacientes
  const handleEditarPacientes = () => {
    setShowEditarPacientesModal(true);
  };
  // Define a função para salvar a lista de pacientes editada e fechar o modal
  const handleSalvarPacientes = () => {
    setShowEditarPacientesModal(false);
    props.onEditarPacientes(novosPacientes);
  };
  // Define a função para fechar o modal de edição de pacientes
  const handleClose = () => {
    setShowEditarPacientesModal(false);
  };
  // Define a função para atualizar a lista de pacientes conforme o usuário digita
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