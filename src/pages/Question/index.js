import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import QuestionComponent from '../../components/QuestionComponent';
import logo from '../../images/logo.svg';
import questions from '../../data/questions';
import Footer from '../../components/Footer';
import answerContext from '../../context/answerContext';
import './index.css';

const ENDPOINT = 'https://kpis-backend-eullerbraz.herokuapp.com/answers';

const Question = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = questions.find((question) => question.id === Number(id));
  const { answer } = useContext(answerContext);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setIsAnswered(answer.satisfaction && answer.peopleQuantity);
  }, [answer])

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
    const isLastQuestion = question.id === questions.length;
    if(!isLastQuestion) {
      navigate(`/question/${question.id + 1}`);
    } else if (isAnswered) {
      sendAnswer();
      navigate("/thanks");
    }
  }

  return (
    <>
      <main className='question-main'>
        <div className='question-main-content'>
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
              disabled={ !answer[question.field] }
              onClick={ handleNext }
              className="button next-button"
            >
              Avançar
            </button>
          </div>
        </div>
        <div className="completed-questions-container">
            <span
              className="completed-questions-text"
            >
              Perguntas Concluídas
            </span>
            <div>
              {
                questions.map((_, index) => {
                  const className = index + 1 <= question.id ?
                  "question-check completed" : "question-check";
                  return (
                    <span key={ index } className={ className }></span>
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
