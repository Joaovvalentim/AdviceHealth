
import React from "react";
import HeaderAgendamentos from '../Header/Header.js'
import AgendaDoMedico from './Agendamentos/AgendaDoMedico.js'
// import AgendaModal from './Agendamentos/AgendaModal.js'



function App() {
  // Inicializando os estados dos valores dos componentes com valores iniciais

  // Retorna a estrutura do aplicativo, com seus componentes filhos passando seus respectivos valores e manipuladores de estado
  return (
    <div className='background'>
      <div className='Home-agenda'>
        <HeaderAgendamentos 
                title="Agenda Dos Medicos"
                buttonName="Voltar"
                newnavigate=""
        />
        <div className='section-1-agenda'>
          <AgendaDoMedico />

        </div>
      </div>
    </div>

  );
}

export default App;
