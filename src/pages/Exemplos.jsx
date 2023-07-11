import { Alert, Button, Calendar } from 'antd';
import Contador from '../components/Contador';
import Relogio from '../components/Relogio';
import dayjs from 'dayjs';

const Exemplos = () => {
  const handleClick = () => console.log('clicou');

  return (
    <div>
      <Relogio dataHora={new Date()} />
      <Contador />
      <Button onClick={handleClick}>
        Clique aqui
      </Button>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
      <Calendar
        fullscreen={false}
        onSelect={day => console.log(day)}
        validRange={[dayjs(), dayjs().add(1, 'week')]}
      />
    </div>
  )
}

export default Exemplos;
