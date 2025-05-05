import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/landingPage.js';
import { AppHeader } from './components/app/appHeader';
import { SignUp } from './pages/signupPage/signupPage.jsx';
import { DashboardPage } from './pages/dashboardPage/dashboardPage.js';
import { AppFooter } from './components/app/appFooter.js';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <AppHeader />
      </div>
      {/* Content */}
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </div>
      <div className="container-fluid">
          <AppFooter />
      </div>
    </>
  );
}

export default App;
