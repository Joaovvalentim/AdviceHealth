import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header.js'
import AgendamentosDoDia from './components/AgendamentosDoDia/AgendamentosDoDia.js'
import FaturamentoDoDia from './components/FaturamentoDoDia/FaturamentoDoDia.js'
import PacientesAtendidos from './components/PacientesAtendidos/PacientesAtendidos.js'
import Avisos from './components/AvisoLembretes/AvisosLembretes.js'
import Agenda from './components/Agenda/Agenda.js'


function App() {
  // Inicializando os estados dos valores dos componentes com valores iniciais
  const [agendamentos, setAgendamentos] = useState("10");
  const [pacientes, setPacientes] = useState("7");
  const [faturamento, setFaturamento] = useState("500");

  // Manipuladores de estado para cada componente, para atualizar seus respectivos valores
  const handleEditarAgendamentos = (novoValor) => {
    setAgendamentos(novoValor);
  };
  const handleEditarPacientes = (novoValor) => {
    setPacientes(novoValor);
  };
  const handleEditarFaturamentos = (novoValor) => {
    setFaturamento(novoValor);
  };

  // Retorna a estrutura do aplicativo, com seus componentes filhos passando seus respectivos valores e manipuladores de estado
  return (
    <div className='background'>
      <div className='Home'>
        <Header 
        title="Consultorio Do João"
        buttonName="Agendar"
        newnavigate="agendamento"
        />
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
        <Avisos />
        <Agenda />
      </div>
    </div>

  );
}

export default App;
