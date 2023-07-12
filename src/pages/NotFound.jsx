import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <div>
        Voltar para o
        {' '}
        <Link to="/">Início</Link>
      </div>
    </div>
  )
}

export default NotFound;
