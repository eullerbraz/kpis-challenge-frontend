import { useContext } from "react";

import answerContext from '../context/answerContext';
import './ButtonsQuestion.css';

const ButtonsQuestion = ({ question }) => {
  const { answer, setAnswer } = useContext(answerContext);
  const { options, field } = question;

  const handleClick = ({ target: { innerText } }) => {
    setAnswer({
      ...answer,
      [field]: Number(innerText),
    });
  }

  const handleChange = ({ target: { value } }) => {
    setAnswer({
      ...answer,
      description: value,
    });
  }

  return (
    <div className="answer-container">
      <section className="input-buttons-container">
        {
          options.map((option, index) => {
            const className = option === answer.satisfaction ?
            'input-button selected-option' : 'input-button';
            return (
              <span
                className={ className }
                key={ index }
                onClick={ handleClick }
              >
                { option }
              </span>
            );
          })
        }
      </section>
      <section className="description-container">
        <div>
          <span className="optional">Opcional</span>
          <h2 className="comment-title">Comentário</h2>
        </div>
        <textarea
          placeholder="Caso queira, adicione os motivos da sua avaliação"
          onChange={ handleChange }
          value={ answer.description }
        />
      </section>
    </div>
  );
}

export default ButtonsQuestion;
