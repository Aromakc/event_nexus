import './styles/App.css';
import Layout from './components/layout';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import CreateEvent from './pages/createEvent';
import ViewEvent from './pages/viewEvent';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/viewEvent" element={<ViewEvent />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
