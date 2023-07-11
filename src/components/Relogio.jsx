import { useEffect, useState } from 'react'

const Relogio = (props) => {
  const { dataHora } = props;

  const [horaAtual, setHoraAtual] = useState(dataHora);

  useEffect(
    () => {
      const contar = () => {
        setHoraAtual(new Date());
      }

      setInterval(contar, 1000);
    },
    []
  );

  return (
    <div>
      <h2>Relógio</h2>
      <h3>Hora certa: {horaAtual.toString()}</h3>
    </div>
  );
};

export default Relogio;
