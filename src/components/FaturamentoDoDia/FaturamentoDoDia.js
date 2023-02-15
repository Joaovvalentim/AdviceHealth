import './FaturamentoDoDia.css';
import React, { useState } from "react";
import { MdOutlineMonetizationOn } from 'react-icons/md';
import { Button, Modal } from "react-bootstrap";
function FaturamentoDoDia(props) {
  const [showEditarFaturamentosModal, setshowEditarFaturamentosModal] = useState(false);
  const [novoFaturamento, setNovoFaturamento] = useState(props.faturamento);

  const handleEditarFaturamentos = () => {
    setshowEditarFaturamentosModal(true);
  };

  const handleSalvarFaturamentos = () => {
    setshowEditarFaturamentosModal(false);
    props.onEditarFaturamentos(novoFaturamento);
  };
  const handleClose = () => {
    setshowEditarFaturamentosModal(false);
  };
  const handleFaturamentoChange = (event) => {
    setNovoFaturamento(event.target.value);
  };

  return (
    <>
      <div className='container-agendamento'>
        <h4>Faturamento Do Dia</h4>
        <span className='icon'><MdOutlineMonetizationOn /> R$: {props.faturamento},00</span>
        <div className='button-footer'>
          <Button variant="primary" onClick={handleEditarFaturamentos}>
            Editar
          </Button>
        </div>
      </div>
      <Modal show={showEditarFaturamentosModal} onHide={handleClose}>
        <Modal.Header closeButton='X'>
          <Modal.Title>Editar Faturamentos do Dia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="pacientesInput">Novo valor:</label>
              <input
                type="text"
                className="form-control"
                id="pacientesInput"
                value={novoFaturamento}
                onChange={handleFaturamentoChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSalvarFaturamentos}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FaturamentoDoDia;