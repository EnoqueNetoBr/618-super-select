function LeftPanel() {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center w-100 h-100'>
        <p className="display-4 bg-white">Gerencie seus produtos com facilidade e eficiência. Cadastre, edite e compartilhe informações importantes com sua equipe, tudo em um só lugar, de forma prática e organizada.</p>
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

export function LandingPage() {
  return (
    <>
      <div className='container-fluid bg-dark wh-100 vh-100 m-0 p-0'>
        <div className='container-fluid w-100 h-100 m-0 p-0    '>
          <div className='row w-100 h-100'>
            {/* Left Panel Slot */}
            <div className='col-5 h-100 bg-secondary'>
              <LeftPanel />
            </div>
            <div className='col h-100 bg-warning'>
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
