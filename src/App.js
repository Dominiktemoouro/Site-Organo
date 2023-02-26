import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
// para nao precisar usar o /campotexto/CamposTexto.js nos alteramos o nome do arquivo para index.js e ele ira aceitar automaticamente


function App() {
// TIMES esta ligado na pasta times.
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9f7e9'
    },
    {
       
       nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#E8F8FF'
    },
    {
      
       nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#EO6B69',
      corSecundaria: '#FDE7E8'
    },
    {
       nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A01',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores ] = useState([])

  const aoNovoCaloboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador ])
  }
  //"times.map" faz o mapeamento da constante times no app.js, e o "{time.nome} pega a parte desejada, que e o nome do time"
  return (
    <div className="App">
      <Banner />
      <Formulario times={ times.map( time => time.nome)} aoColaboradorCadastrado={ colaborador => aoNovoCaloboradorAdicionado(colaborador) }/>
      {times.map(time => <Time 
      key={ time.nome } 
      nome={ time.nome }
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}
// cria modulos que fazem com que possamos buscar as informações do codigo app
export default App;
