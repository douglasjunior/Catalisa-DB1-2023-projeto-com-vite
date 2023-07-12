import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import TarefaItem from '../components/TarefaItem';
import InputText from '../components/InputText';
import fakeAuth from '../fake-auth';

const Tarefas = () => {
  const navigate = useNavigate();

  const [tarefas, setTarefas] = useState([]);

  const [busca, setBusca] = useState('');

  const handleBusca = (event) => {
    setBusca(event.target.value);
  }

  const tarefasFiltradas = useMemo(() => {
    if (!busca) return tarefas;

    return tarefas.filter((tarefa, index) => {
      return tarefa.title.includes(busca);
    });
  }, [busca, tarefas]);

  const requestTarefas = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);
      setTarefas(response.data);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    requestTarefas();
  }, []);

  const validarCampoBusca = (value) => {
    return value && value.length > 10
      ? 'O termo de busca deve possui no máximo 10 caracteres.'
      : undefined;
  }

  const renderItemTarefa = (tarefa, index) => {
    return (
      <TarefaItem tarefa={tarefa} key={tarefa.key} />
    );
  };

  const handleSair = () => {
    fakeAuth.isAuthenticated = false;
    navigate('/login');
  };

  return (
    <div className='Tarefas_page'>
      <button onClick={handleSair}>
        Sair
      </button>
      
      <Form layout='vertical'>
        <InputText
          label="Buscar tarefa"
          placeholder="Buscar tarefa por título"
          onChange={handleBusca}
          value={busca}
          validate={validarCampoBusca}
        />
      </Form>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Concluída</th>
          </tr>
        </thead>
        <tbody>
          {tarefasFiltradas.map(renderItemTarefa)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarefas;
