import ButtonsQuestion from "./ButtonsQuestion";
import RadioQuestion from "./RadioQuestion";

const QuestionComponent = ({ question }) => {
  return (
    <div
      className="question-container"
    >
      <h1 className="question-title">
        { question.title }
      </h1>

      {
        question.type === "radio" ?
        <RadioQuestion question={ question } /> :
        question.type === "buttons" ?
        <ButtonsQuestion question={ question }/> :
        null
      }
    </div>
  );
}

export default QuestionComponent;
