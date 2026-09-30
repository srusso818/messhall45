import { Routes, Route, Navigate } from 'react-router-dom';
import Website from './screens/Website';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/website" element={<Website />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
