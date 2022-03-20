import { Routes, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Question from './Question';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={ <Welcome /> } />
      <Route path="/question/:id" element={ <Question /> } />
    </Routes>
  );
}

export default RoutesPage;