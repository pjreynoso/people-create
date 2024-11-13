import { AppRoutes } from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;