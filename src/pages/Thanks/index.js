import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import logo from '../../images/logo.svg'
import './index.css';


const Thanks = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/chart/1");
  }

  return (
    <>
      <main className='thanks-main'>
        <div className='thanks-main-content'>
          <img
            src={logo}
            alt="Company logo"
            className="thanks-logo"
          />
          <div
            className="thanks-text-container"
          >
            <span>
              Muito obrigado por preencher o nosso formulário!
            </span>
            <span>
              Sua opinião é muito importante para o constante crescimento da empresa
            </span>
            <span>
              Gostaria de verificar nosso gráfico sobre esse formulário?
            </span>
          </div>
          <button
            onClick={ onClick }
            className="button chart-button"
          >
            Gráficos
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Thanks;
