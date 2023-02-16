// Importando os hooks useState e as dependências do React Bootstrap
import { useState } from 'react';
import './AvisosLembretes.css'
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { Container, Row, Col, ListGroup, Form, Button, Modal } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import Calendario from './Calendario.js'
function Avisos() {
    // Criando um estado inicial para os avisos, com um array de objetos, cada um com uma propriedade id e texto
    const [avisos, setAvisos] = useState([
        {
            id: 1,
            texto: "Contratar João",
        },
        {
            id: 2,
            texto: "Feriado em breve!",
        },
        {
            id: 3,
            texto: "Aniversario de Dra.Maria no fim de semana.",
        }
    ]);

    // Criando estados iniciais para o novo aviso, para exibir ou não o modal para criar novo aviso
    const [novoAviso, setNovoAviso] = useState("");
    const [showNovoAviso, setShowNovoAviso] = useState(false);

    // Criando funções para lidar com a abertura e fechamento do modal de novo aviso, e para adicionar o novo aviso aos avisos existentes
    const handleNovoAviso = () => {
        setShowNovoAviso(true);
    }

    const handleNovoAvisoClose = () => {
        setShowNovoAviso(false);
        setNovoAviso("");
    }

    const handleNovoAvisoSave = () => {
        setAvisos([
            ...avisos,
            {
                id: avisos.length + 1,
                texto: novoAviso
            }
        ]);
        setShowNovoAviso(false);
        setNovoAviso("");
    }
    // Criando função para lidar com a exclusão de um aviso, filtrando o array de avisos para remover o aviso com o id correspondente
    const handleAvisoDelete = (id) => {
        const novosAvisos = avisos.filter((aviso) => aviso.id !== id);
        setAvisos(novosAvisos);
    }
    // Criando função para lidar com a exclusão de um aviso, filtrando o array de avisos para remover o aviso com o id correspondente
    return (
        <div className='container-todos-conteudos'>
            <div className='container-conteudo-avisos'>
                <Container className="mt-4 container-avisos">
                    <Row className="mb-3">
                        <Col>
                            <h1>Avisos e Lembretes</h1>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className='col-button'>
                            {/* Adicionando um botão para exibir o modal para adicionar novo aviso */}
                            <Button variant="primary" onClick={handleNovoAviso}>
                                Adicionar novo aviso
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* Renderizando uma lista de avisos usando a dependência ListGroup do React Bootstrap, com um loop para criar um item de lista para cada aviso */}
                            <ListGroup>
                                {avisos.map((aviso) => (
                                    <li className="list-group-item d-flex align-items-center list-item" key={aviso.id}>
                                        <VscDebugBreakpointLog /> {aviso.texto}
                                        {/* Adicionando um botão para excluir o aviso correspondente, com um ícone de lixeira importado da dependência react-icons */}
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger ms-2"
                                            onClick={() => handleAvisoDelete(aviso.id)}
                                        >
                                            <BsTrash />
                                        </button>
                                    </li>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <Modal show={showNovoAviso} onHide={handleNovoAvisoClose}>{/* Criando um modal para adicionar um novo aviso */}
                        <Modal.Header closeButton>
                            <Modal.Title>Novo aviso</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Texto do aviso</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={novoAviso}
                                        onChange={(e) => setNovoAviso(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleNovoAvisoClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={handleNovoAvisoSave}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
            <div className='container-conteudo-calendario'>
                <Calendario />
            </div>
        </div>
    );
}

export default Avisos;
