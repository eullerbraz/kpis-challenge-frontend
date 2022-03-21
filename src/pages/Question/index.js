import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

import QuestionComponent from '../../components/QuestionComponent';
import logo from '../../images/logo.svg';
import questions from '../../data/questions';
import Footer from '../../components/Footer';
import answerContext from '../../context/answerContext';

const ENDPOINT = 'https://kpis-backend-eullerbraz.herokuapp.com/answers';

const Question = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = questions.find((question) => question.id === Number(id));
  const { answer } = useContext(answerContext);

  const sendAnswer = async () => {
    await axios.post(
      ENDPOINT,
      answer,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  const handleBack = () => {
    if (question.id === 1) {
      navigate("/");
    } else {
      navigate(`/question/${question.id - 1}`);
    }
  }

  const handleNext = () => {
    if (question.id === questions.length) {
      sendAnswer();
      navigate("/thanks");
    } else {
      navigate(`/question/${question.id + 1}`);
    }
  }

  return (
    <>
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
      <Footer />
    </>
  );
}

export default Question;
