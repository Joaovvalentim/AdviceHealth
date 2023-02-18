import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './App.js';
import PageAgenda from './components/pages/PageAgenda.js';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/agendamento" element={<PageAgenda />} />
            </Routes>
        </Router >
    )

}

export default Rotas