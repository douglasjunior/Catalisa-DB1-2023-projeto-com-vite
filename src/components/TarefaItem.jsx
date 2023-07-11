const TarefaItem = (props) => {
  const { tarefa } = props;

  return (
    <tr>
      <td>{tarefa.id}</td>
      <td>{tarefa.title}</td>
      <td>{tarefa.completed ? 'Sim' : 'Não'}</td>
    </tr>
  )
}

export default TarefaItem;
