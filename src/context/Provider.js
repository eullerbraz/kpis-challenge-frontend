import { useState } from 'react';
import answerContext from './answerContext';

const Provider = ({ children }) => {
  const [answer, setAnswer] = useState({
    peopleQuantity: '',
    satisfaction: 0,
  });

  const contextValue = {
    answer,
    setAnswer,
  };

  return (
    <answerContext.Provider value={ contextValue }>
      { children }
    </answerContext.Provider>
  );
}

export default Provider;