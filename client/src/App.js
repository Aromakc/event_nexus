import './styles/App.css';
import Layout from './components/layout';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './page/home';
import CreateEvent from './page/createEvent';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
