import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configurando o localizador para o calendário utilizar o Moment.js
const localizer = momentLocalizer(moment);

const MeuCalendario = () => {
  // Estado que armazena a lista de eventos do calendário
  const [eventos, setEventos] = useState([]);

  // Função responsável por adicionar um novo evento à lista de eventos
  const adicionarEvento = (evento) => {
    setEventos([...eventos, evento]);
  };

  return (
    // Componente principal do calendário, com o estilo definido através de uma propriedade style
    <div style={{ height: '350px',padding:'20px',marginBottom:'100px' }}>
      <Calendar
        // Localizador do calendário
        localizer={localizer}
        // Lista de eventos
        events={eventos}
        // Propriedade que define qual atributo do objeto representa o início do evento
        startAccessor="start"
        // Propriedade que define qual atributo do objeto representa o final do evento
        endAccessor="end"
        // Estilo do calendário
        style={{ margin: '80px' }}
        // Função chamada quando um slot do calendário é selecionado
        onSelectSlot={(slotInfo) => {
          // Solicita ao usuário que insira o título do novo evento através de um prompt
          const titulo = window.prompt('Insira o título do evento:');
          // Verifica se o título foi inserido pelo usuário
          if (titulo) {
            // Cria um novo objeto representando o novo evento com base no slot selecionado e no título inserido
            const novoEvento = {
              start: slotInfo.start,
              end: slotInfo.end,
              title: titulo,
            };
            // Adiciona o novo evento à lista de eventos
            adicionarEvento(novoEvento);
          }
        }}
      />
    </div>
  );
};

export default MeuCalendario;
