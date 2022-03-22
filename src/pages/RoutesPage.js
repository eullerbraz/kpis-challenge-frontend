import { Routes, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Question from './Question';
import Thanks from './Thanks';
import Chart from './Chart';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={ <Welcome /> } />
      <Route path="/question/:id" element={ <Question /> } />
      <Route path="/thanks" element={ <Thanks /> } />
      <Route path="/chart/:id" element={ <Chart /> } />
    </Routes>
  );
}

export default RoutesPage;