import { useContext } from "react";

import answerContext from '../context/answerContext';

const ButtonsQuestion = ({ question }) => {
  const { answer, setAnswer } = useContext(answerContext);
  const { options, field } = question;

  const handleClick = ({ target: { innerText, classList } }) => {
    classList.add("selected-option");
    setAnswer({
      ...answer,
      [field]: Number(innerText),
    });
  }

  return (
    <div className="input-buttons-container">
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
    </div>
  );
}

export default ButtonsQuestion;
