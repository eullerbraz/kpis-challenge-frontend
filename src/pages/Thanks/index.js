import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';

import logo from '../../images/logo.svg'

const Thanks = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/chart/1");
  }

  return (
    <>
      <main>
        <img
          src={logo}
          alt="Company logo"
          className="thanks-logo"
        />
        <div
          className="welcome-text-container"
        >
          <span>
            Muito obrigado por preencher o nosso formulário!
          </span>
          <span>
            Sua opinião é muito importante para o constante crescimento da emmpresa
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
      </main>
      <Footer />
    </>
  );
}

export default Thanks;
