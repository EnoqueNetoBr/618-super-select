import backgroundImage from './../../images/background/signupPageBackground.png';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

export function LogInPage() {
  return (
    <>
      <div className='container-fluid bg-secondary m-0 p-0 d-flex justify-content-center align-items-center' style={{ height: '75vh', position: 'relative' }}>
        <LogInForm />
        <div style={{ position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px' }}>
          <img className='w-100 h-100' src={backgroundImage} alt='Login background image.' style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </>
  );
}

function LogInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [responseStatus, setResponseStatus] = useState<number | null | undefined>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle Submit
    console.log('handleSubmit LOGIN executed.');
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        {
          loginUserEmail: email,
          loginPassword: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.statusText);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <>
      <div className='container m-0 p-0 rounded-5 shadow-lg' style={{ width: '30rem', height: '30rem', zIndex: '10', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <form className='h-100' onSubmit={handleSubmit}>
          <div className='container m-0 p-0 p-4 d-flex flex-column justify-content-center align-items-around h-100'>
            <div className='mt-3'>
              <label htmlFor='loginUserEmail'>
                <p className='fs-5'>Endereço de email: </p>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} className='form-control shadow-sm' type='mail' name='loginUserEmail' id='loginUserEmail' />
            </div>

            <div className='mt-3'>
              <label htmlFor='loginPassword'>
                <p className='fs-5'>Senha: </p>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} className='form-control shadow-sm' type='password' name='loginPassword' id='loginPassword' />
            </div>

            <button className='mt-auto' type='submit' style={{ all: 'unset' }}>
              <LogInSubmitButton />
            </button>

            <div className=''>
              <p className='text-center mb-1'>
                Não possui uma conta? <span className='text-primary'>Cadastre-se.</span>{' '}
              </p>

              <div>
                <CreateAccountButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function LogInSubmitButton() {
  return (
    <>
      <div className='bg-primary rounded-pill mx-auto my-3 p-0 button shadow-sm btn' style={{ width: '27rem', height: '4rem' }}>
        <div className='row h-100 m-0 p-0'>
          {/* Google icon */}
          <div className='col-3 d-flex justify-content-center align-items-center m-0 p-0 '>
            {/* SVG */}
            <i className='bi bi-person-circle text-light' style={{ fontSize: '2.6rem' }}></i>
          </div>
          <div className='col h-100 m-0 p-0 d-flex flex-column justify-content-center aling-items-center'>
            <p className='fs-3 m-0 p-0 text-center text-light'>Entrar</p>
          </div>
        </div>
      </div>
    </>
  );
}

function CreateAccountButton() {
  return (
    <>
      <Nav.Link className='btn' to='/signup' as={NavLink}>
        <div className='bg-primary rounded-pill mx-auto mb-3 p-0 button shadow-sm' style={{ width: '27rem', height: '4rem' }}>
          <div className='row h-100 m-0 p-0'>
            {/* Google icon */}
            <div className='col-3 d-flex justify-content-center align-items-center m-0 p-0 '>
              {/* SVG */}
              <i className='bi bi-person-add text-light' style={{ fontSize: '2.6rem' }}></i>
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
