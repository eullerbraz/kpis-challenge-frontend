import { useContext } from "react";

import answerContext from '../context/answerContext';

const RadioQuestion = ({ question }) => {
  const { answer, setAnswer } = useContext(answerContext);
  const { options, field } = question;

  const handleChange = ({ target: { value } }) => {
    setAnswer({
      ...answer,
      [field]: value,
    });
  }

  return (
    <div className="radio-container">
      {
        options.map((option, index) => (
          <div
            className="radio-option"
            key={ index }
          >
            <input
              type="radio"
              name={ field }
              id={ option }
              value={ option }
              onChange={ handleChange }
              checked={ option === answer[field] }
            />
            <label
              htmlFor={option}
            >
              { option }
            </label>
            </div>
        ))
      }
    </div>
  );
}

export default RadioQuestion;
