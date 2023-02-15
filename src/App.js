import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header.js'
import AgendamentosDoDia from './components/AgendamentosDoDia/AgendamentosDoDia.js'
import FaturamentoDoDia from './components/FaturamentoDoDia/FaturamentoDoDia.js'
import PacientesAtendidos from './components/PacientesAtendidos/PacientesAtendidos.js'


function App() {
  const [agendamentos, setAgendamentos] = useState("10");
  const [pacientes, setPacientes] = useState("7");
  const [faturamento, setFaturamento] = useState("500");
  const handleEditarAgendamentos = (novoValor) => {
    setAgendamentos(novoValor);
  };
  const handleEditarPacientes = (novoValor) => {
    setPacientes(novoValor);
  };
  const handleEditarFaturamentos = (novoValor) => {
    setFaturamento(novoValor);
  };
  return (
    <div className='Home'>
      <Header />
      <div className='section-1'>
        <AgendamentosDoDia
          agendamentos={agendamentos}
          onEditarAgendamentos={handleEditarAgendamentos} />
        <PacientesAtendidos
          pacientes={pacientes}
          onEditarPacientes={handleEditarPacientes} />
        <FaturamentoDoDia
          faturamento={faturamento}
          onEditarFaturamentos={handleEditarFaturamentos} />
      </div>
    </div>

  );
}

export default App;
