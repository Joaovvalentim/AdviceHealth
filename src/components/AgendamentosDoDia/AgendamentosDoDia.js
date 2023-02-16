import './AgendamentosDoDia.css'; // importa o estilo CSS para o componente
import React, { useState } from "react"; // importa a biblioteca do React e o hook useState
import { BsFillPersonFill } from 'react-icons/bs'; // importa o ícone de pessoa preenchida do React-icons
import { Button, Modal } from "react-bootstrap"; // importa os componentes Button e Modal do React Bootstrap

function AgendamentosDoDia(props) { // define o componente AgendamentosDoDia, que recebe as propriedades passadas na sua chamada

    const [showEditarAgendamentosModal, setShowEditarAgendamentosModal] = useState(false); // declara duas variáveis de estado (state), uma para indicar se o modal de edição está visível e outra para alterá-lo
    const [novoAgendamento, setNovoAgendamento] = useState(props.agendamentos); // declara uma variável de estado para o novo agendamento e a função para atualizá-la

    const handleEditarAgendamentos = () => { // função chamada quando o botão Editar é pressionado
        setShowEditarAgendamentosModal(true); // altera a variável de estado para indicar que o modal deve ser exibido
    };

    const handleSalvarAgendamentos = () => { // função chamada quando o botão Salvar é pressionado
        setShowEditarAgendamentosModal(false); // altera a variável de estado para indicar que o modal deve ser fechado
        props.onEditarAgendamentos(novoAgendamento); // chama a função passada por props para salvar as alterações no agendamento
    };
    const handleClose = () => { // função chamada quando o botão Cancelar é pressionado ou quando o modal é fechado
        setShowEditarAgendamentosModal(false); // altera a variável de estado para indicar que o modal deve ser fechado
    };
    const handleAgendamentosChange = (event) => { // função chamada quando o valor do campo de edição é alterado
        setNovoAgendamento(event.target.value); // atualiza o valor do novo agendamento com o valor digitado no campo de edição
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