import { useContext } from "react";

import answerContext from '../context/answerContext';

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
      <>
        <section className="input-buttons-container">
          {
            options.map((option, index) => {
              const className = option === answer.satisfaction ?
              'input-button selected-option' : 'input-button';
              return (
                <div
                  className={ className }
                  key={ index }
                  onClick={ handleClick }
                >
                  { option }
                </div>
              );
            })
          }
        </section>
        <section className="description-container">
          <span className="optional">Opcional</span>
          <h2 className="comment-title">Comentário</h2>
          <textarea
            placeholder="Caso queira, adicione os motivos da sua avaliação"
            onChange={ handleChange }
            value={ answer.description }
          />
        </section>
      </>
    </div>
  );
}

export default ButtonsQuestion;
