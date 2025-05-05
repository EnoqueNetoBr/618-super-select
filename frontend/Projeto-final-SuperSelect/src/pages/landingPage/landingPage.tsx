import LandingPageBackgroungd from './LandingPageBackground.png';

export function LandingPage() {
  return (
    <>
      <div className='container-fluid bg-dark wh-100 m-0 p-0' style={{ height: '75vh' }}>
        <div className='container-fluid w-100 h-100 m-0 p-0    '>
          <div className='row w-100 h-100 m-0 p-0' style={{ position: 'relative' }}>
            {/* Left Panel Slot */}
            <div className='col-5 h-100 m-0 p-0' style={{zIndex: "10"}}>
              <LeftPanel />
            </div>
            <div className='col h-100'>
              <RightPanel />
            </div>
            {/* Background Image Socket */}
            <div className='m-0 p-0' style={{ position: 'absolute', objectFit: 'cover', top: '0px', bottom: '0px', left: '0px', right: '0px' }}>
              <img className='w-100 h-100' src={LandingPageBackgroungd} alt='Landing Page Background' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LeftPanel() {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center w-100 h-100 p-5' style={{ backgroundColor: 'rgba(250, 250, 250, 0.5)' }}>
        <p className='display-4'>Gerencie seus produtos com facilidade e eficiência. Cadastre, edite e compartilhe informações importantes com sua equipe, tudo em um só lugar, de forma prática e organizada.</p>
      </div>
    </>
  );
}

function RightPanel() {
  return (
    <>
      <div className='container-fluid w-100 h-100 m-0 p-0'></div>
    </>
  );
}
