import { useNavigate, useParams } from 'react-router-dom';

import QuestionComponent from '../../components/QuestionComponent';
import logo from '../../images/logo.svg';
import questions from '../../data/questions';

const Question = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = questions.find((question) => question.id === Number(id));

  const handleBack = () => {
    if (question.id === 1) {
      navigate("/");
    } else {
      navigate(`/question/${question.id - 1}`);
    }
  }

  const handleNext = () => {
    if (question.id === questions.length) {
      navigate("/thanks");
    } else {
      navigate(`/question/${question.id + 1}`);
    }
  }

  return (
    <main>
      <img
        src={logo}
        alt="Company logo"
        className="question-logo"
      />
      <QuestionComponent
        question={question}
      />
      <div className="buttons-container">
        <button
          onClick={ handleBack }
          className="button back-button"
        >
          Voltar
        </button>
        <button
          onClick={ handleNext }
          className="button next-button"
        >
          Avançar
        </button>
      </div>
      <div className="completed-questions-container">
        <span
          className="completed-questions-text"
        >
          Perguntas Concluidas
        </span>
        <div>
          {
            questions.map((_, index) => {
              const className = index + 1 <= question.id ?
              "question-check completed" : "question-check";

              return (
                <span className={ className }></span>
              );
            })
          }
        </div>
      </div>
    </main>
  );
}

export default Question;
