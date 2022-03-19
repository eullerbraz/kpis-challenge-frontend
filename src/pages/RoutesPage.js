import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={ <Welcome /> } />
    </Routes>
  );
}

export default RoutesPage;