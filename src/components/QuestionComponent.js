const QuestionComponent = ({ question }) => {
  return (
    <div
      className="question-container"
    >
      { question.title }
    </div>
  );
}

export default QuestionComponent;
