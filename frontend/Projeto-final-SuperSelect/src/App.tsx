import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/landingPage.js';
import { AppHeader } from './components/app/appHeader';
import { DashboardPage } from './pages/dashboardPage/dashboardPage.js';
import { AppFooter } from './components/app/appFooter.js';
import { LogInPage } from './pages/loginPage/loginPage.jsx';
import { SignUpPage } from './pages/signupPage/signupPage.js';

function App() {
  return (
    <>
      <div className='container-fluid m-0 p-0'>
        <AppHeader />
      </div>
      {/* Content */}
      <div className='container-fluid m-0 p-0'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </div>
      <div className='container-fluid m-0 p-0'>
        <AppFooter />
      </div>
    </>
  );
}

export default App;
