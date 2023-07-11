import { useEffect, useState, useMemo } from 'react'
import axios from 'axios';

import TarefaItem from '../components/TarefaItem';
import InputText from '../components/InputText';
import { Form } from 'antd';

const Tarefas = () => {
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

  return (
    <div className='Tarefas_page'>
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
