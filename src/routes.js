import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './App.js';
import AgendamentoMedico from './components/pages/Agendamentos/AgendaDoMedico.js';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/agendamento" element={<AgendamentoMedico />} />
            </Routes>
        </Router >
    )

}

export default Rotas