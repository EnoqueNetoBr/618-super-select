import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { AppHeader } from './components/app/appHeader';
import { SignUp } from './pages/signup/signup.jsx';



function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
