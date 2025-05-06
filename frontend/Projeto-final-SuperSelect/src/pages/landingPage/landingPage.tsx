import LandingPageBackgroungd from './LandingPageBackground.png';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export function LandingPage() {
  return (
    <>
      <div className='container-fluid bg-dark wh-100 m-0 p-0' style={{ height: '75vh' }}>
        <div className='container-fluid w-100 h-100 m-0 p-0    '>
          <div className='row w-100 h-100 m-0 p-0' style={{ position: 'relative' }}>
            {/* Left Panel Slot */}
            <div className='col-5 h-100 m-0 p-0' style={{ zIndex: '10' }}>
              <LeftPanel />
            </div>
            <div className='col h-100' style={{ zIndex: '10' }}>
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
      <div className='container-fluid w-100 h-100 m-0 p-0 d-flex justify-content-center align-items-center'>
        <div className='container rounded-5 form-control d-flex flex-column justify-content-start aling-items-center' style={{ width: '35rem', height: '22rem', backgroundColor: 'rgba(250, 250, 250, 0.5)' }}>
          <div>
            <p className='text-center text-dark' style={{ fontWeight: 'bold', fontSize: '3rem' }}>
              Bem-vindo
            </p>
          </div>

          <div className='w-100' style={{ borderTop: '2px solid rgb(33, 37, 41)' }}></div>

          {/* Buttons Container */}
          <div className='container w-100 h-100 d-flex flex-column justify-content-center aling-items-center m-0 p-0'>
            <GoogleSignInButton />
            <CreateAnAccountButton />
          </div>
        </div>
      </div>
    </>
  );
}

function GoogleSignInButton() {
  return (
    <>
      <div className='bg-light rounded-pill mx-auto my-3 p-0 shadow-sm' style={{ width: '27rem', height: '4rem' }}>
        <div className='row h-100 m-0 p-0'>
          {/* Google icon */}
          <div className='col-3 d-flex justify-content-center align-items-center m-0 p-0 '>
            {/* SVG */}
            <>
              {/*?xml version="1.0" ?*/}
              <svg id='Capa_1' style={{ width: '4rem' }} version='1.1' viewBox='0 0 150 150' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
                <style
                  type='text/css'
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n\t.st0{fill:#1A73E8;}\n\t.st1{fill:#EA4335;}\n\t.st2{fill:#4285F4;}\n\t.st3{fill:#FBBC04;}\n\t.st4{fill:#34A853;}\n\t.st5{fill:#4CAF50;}\n\t.st6{fill:#1E88E5;}\n\t.st7{fill:#E53935;}\n\t.st8{fill:#C62828;}\n\t.st9{fill:#FBC02D;}\n\t.st10{fill:#1565C0;}\n\t.st11{fill:#2E7D32;}\n\t.st12{fill:#F6B704;}\n\t.st13{fill:#E54335;}\n\t.st14{fill:#4280EF;}\n\t.st15{fill:#34A353;}\n\t.st16{clip-path:url(#SVGID_2_);}\n\t.st17{fill:#188038;}\n\t.st18{opacity:0.2;fill:#FFFFFF;enable-background:new    ;}\n\t.st19{opacity:0.3;fill:#0D652D;enable-background:new    ;}\n\t.st20{clip-path:url(#SVGID_4_);}\n\t.st21{opacity:0.3;fill:url(#_45_shadow_1_);enable-background:new    ;}\n\t.st22{clip-path:url(#SVGID_6_);}\n\t.st23{fill:#FA7B17;}\n\t.st24{opacity:0.3;fill:#174EA6;enable-background:new    ;}\n\t.st25{opacity:0.3;fill:#A50E0E;enable-background:new    ;}\n\t.st26{opacity:0.3;fill:#E37400;enable-background:new    ;}\n\t.st27{fill:url(#Finish_mask_1_);}\n\t.st28{fill:#FFFFFF;}\n\t.st29{fill:#0C9D58;}\n\t.st30{opacity:0.2;fill:#004D40;enable-background:new    ;}\n\t.st31{opacity:0.2;fill:#3E2723;enable-background:new    ;}\n\t.st32{fill:#FFC107;}\n\t.st33{opacity:0.2;fill:#1A237E;enable-background:new    ;}\n\t.st34{opacity:0.2;}\n\t.st35{fill:#1A237E;}\n\t.st36{fill:url(#SVGID_7_);}\n\t.st37{fill:#FBBC05;}\n\t.st38{clip-path:url(#SVGID_9_);fill:#E53935;}\n\t.st39{clip-path:url(#SVGID_11_);fill:#FBC02D;}\n\t.st40{clip-path:url(#SVGID_13_);fill:#E53935;}\n\t.st41{clip-path:url(#SVGID_15_);fill:#FBC02D;}\n',
                  }}
                />
                <g>
                  <path className='st14' d='M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z' />
                  <path className='st15' d='M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z' />
                  <path className='st12' d='M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z' />
                  <path className='st13' d='M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z' />
                </g>
              </svg>
            </>
          </div>
          <div className='col h-100 m-0 p-0 d-flex flex-column justify-content-center aling-items-center'>
            <p className='fs-3 m-0 p-0 text-center'>Login com Google</p>
          </div>
        </div>
      </div>
    </>
  );
}

function CreateAnAccountButton() {
  return (
    <>
      <Nav.Link to='/signup' className='btn btn-dark' style={{backgroundColor: "rgba(0,0,0,0)"}}  as={NavLink}>
        <div className='bg-primary rounded-pill mx-auto my-3 p-0 button shadow-sm' style={{ width: '27rem', height: '4rem' }}>
          <div className='row h-100 m-0 p-0'>
            {/* Google icon */}
            <div className='col-3 d-flex justify-content-center align-items-center m-0 p-0 '>
              {/* SVG */}
              <i className='bi bi-person-circle text-light' style={{ fontSize: '2.6rem' }}></i>
            </div>
            <div className='col h-100 m-0 p-0 d-flex flex-column justify-content-center aling-items-center'>
              <p className='fs-3 m-0 p-0 text-center text-light'>Criar uma conta</p>
            </div>
          </div>
        </div>
      </Nav.Link>
    </>
  );
}
