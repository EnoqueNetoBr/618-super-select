import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AppHeader } from './components/app/appHeader';

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
