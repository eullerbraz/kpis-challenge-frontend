import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo.svg'

const companyName = "LetitBeer";

const Welcome = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/question/1");
  }

  return (
    <main>
      <img
        src={logo}
        alt="Company logo"
        className="company-logo"
      />

      <div
        className="welcome-text-container"
      >
        <span>
          Bem vindo ao nosso formulário voltado ao seu bem estar!
        </span>
        <span>
          Conte para a gente como está sendo sua experiência na { companyName }
        </span>
        <span>
          Responda da forma mais sincera possível, nosso objetivo é coletar dados para que possamos evoluir sempre!
        </span>
      </div>

      <button
        onClick={ onClick }
        className="button start-button"
      >
        Começar
      </button>
    </main>
  );
}

export default Welcome;
