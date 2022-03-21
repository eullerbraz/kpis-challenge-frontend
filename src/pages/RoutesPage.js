import { Routes, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Question from './Question';
import Thanks from './Thanks';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={ <Welcome /> } />
      <Route path="/question/:id" element={ <Question /> } />
      <Route path="/thanks" element={ <Thanks /> } />
    </Routes>
  );
}

export default RoutesPage;