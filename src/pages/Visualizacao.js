import { useEffect, useState } from 'react';
import Time from '../componentes/Time';
import './Visualizacao.css';

const GIST_ID = 'ea22caae79b5d0617b17dcc1df9ed1da';
const GIST_URL = `https://api.github.com/gists/${GIST_ID}`;

const Visualizacao = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch(GIST_URL)
      .then(res => res.json())
      .then(data => {
        const conteudo = JSON.parse(data.files['dados.json'].content);
        setColaboradores(conteudo);
      });
  }, []);

  useEffect(() => {
    setTimes([
     {
        nome: 'Janeiro',
        corPrimaria: '#B2E2E0', // Verde claro
        corSecundaria: '#022924' // Verde escuro
      },
      {
        nome: 'Fevereiro',
        corPrimaria: '#F5CBA7', // Laranja claro
        corSecundaria: '#E37222' // Laranja forte
      },
      {
        nome: 'Março',
        corPrimaria: '#D5D5D5', // Cinza claro
        corSecundaria: '#919191' // Cinza escuro
      },
      {
        nome: 'Abril',
        corPrimaria: '#E6F2F0', // Verde bem claro
        corSecundaria: '#003D35' // Verde institucional escuro
      },
      {
        nome: 'Maio',
        corPrimaria: '#FDFDFD', // Branco gelo
        corSecundaria: '#B2B2B2' // Cinza médio
      },
      {
        nome: 'Junho',
        corPrimaria: '#FFF0E5', // Laranja pastel
        corSecundaria: '#CC5500' // Laranja escuro queimado
      },
      {
        nome: 'Julho',
        corPrimaria: '#EAF4F4', // Verde muito claro
        corSecundaria: '#005A55' // Verde petróleo
      },
      {
        nome: 'Agosto',
        corPrimaria: '#EFEFEF', // Cinza branco
        corSecundaria: '#606060' // Cinza forte
      },
      {
        nome: 'Setembro',
        corPrimaria: '#FFE8D1', // Laranja amarelado
        corSecundaria: '#C65F00' // Laranja queimado forte
      },
      {
        nome: 'Outubro',
        corPrimaria: '#F5F5F5', // Branco levemente cinza
        corSecundaria: '#2E2E2E' // Cinza carvão
      },
      {
        nome: 'Novembro',
        corPrimaria: '#D0F0EC', // Verde água
        corSecundaria: '#00665E' // Verde escuro acinzentado
      },
      {
        nome: 'Dezembro',
        corPrimaria: '#FFF9F5', // Quase branco com tom quente
        corSecundaria: '#8A4B00' // Marrom-laranja forte
      }
    ]);
  }, []);

  // Agrupa os times em linhas de 4
  const groupedTimes = [];
  for (let i = 0; i < times.length; i += 4) {
    groupedTimes.push(times.slice(i, i + 4));
  }

  return (
    <div className="visualizacao-container">
      <header className="visualizacao-header">
      </header>

      <main className="visualizacao-content">
        <h1>Eventos do Ecossistema</h1>
        
        {groupedTimes.map((row, rowIndex) => (
          <div key={rowIndex} className="times-row">
            {row.map(time => (
              <div key={time.nome} className="time-card">
                <Time
                  nome={time.nome}
                  corPrimaria={time.corPrimaria}
                  corSecundaria={time.corSecundaria}
                  colaboradores={colaboradores.filter(c => c.time === time.nome)}
                  aoDeletar={() => {}}
                />
              </div>
            ))}
          </div>
        ))}
      </main>

      <footer className="visualizacao-footer">
      </footer>
    </div>
  );
};

export default Visualizacao;