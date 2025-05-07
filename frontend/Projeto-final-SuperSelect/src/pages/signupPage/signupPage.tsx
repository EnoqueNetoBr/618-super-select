import backgroundImage from './../../images/background/signupPageBackground.png';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// method='POST' action='http://localhost:3000/auth/register'

export function SignUpPage() {
  return (
    <>
      <div className='container-fluid bg-secondary m-0 p-0 d-flex justify-content-center align-items-center' style={{ height: '75vh', position: 'relative' }}>
        <SignUpForm />
        <div style={{ position: 'absolute', top: '0px', bottom: '0px', right: '0px', left: '0px' }}>
          <img className='w-100 h-100' src={backgroundImage} alt='Login background image.' style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </>
  );
}

function SignUpForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        signUpName: name,
        signUpEmail: email,
        signUpPassword: password,
      }),
    });

    // const data = await response.json();
    // console.log(data);
    // const htmlResponse = await response.text();
    // console.log(htmlResponse)
  
  };

  return (
    <>
      <div className='container m-0 p-0 rounded-5 shadow-lg' style={{ width: '30rem', height: '40rem', zIndex: '10', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <form className='h-100' onSubmit={handleSubmit}>
          <div className='container m-0 p-0 p-4 d-flex flex-column justify-content-center align-items-around h-100'>
            <div className='mt-3'>
              <label htmlFor='signUpUserName'>
                <p className='fs-5'>Nome: </p>
              </label>
              <input onChange={(e) => setName(e.target.value)} className='form-control shadow-sm' type='text' name='signUpUserName' id='signUpUserName' />
            </div>

            <div className='mt-3'>
              <label htmlFor='signUpUserEmail'>
                <p className='fs-5'>Endereço de email: </p>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} className='form-control shadow-sm' type='mail' name='signUpUserEmail' id='signUpUserEmail' />
            </div>

            <div className='mt-3'>
              <label htmlFor='signUpUserPassword'>
                <p className='fs-5'>Senha: </p>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} className='form-control shadow-sm' type='password' name='signUpUserPassword' id='signUpUserPassword' />
            </div>

            <button className='mt-auto' type='submit' style={{ all: 'unset' }}>
              <CreateAccountButton />
            </button>

            <div className=''>
              <p className='text-center mb-1'>
                Já possui uma conta? <span className='text-primary'>Faça login.</span>{' '}
              </p>

              <div>
                <LogInSubmitButton />
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
      <Nav.Link className='btn' to='/login' as={NavLink}>
        <div className='bg-primary rounded-pill mx-auto my-3 p-0 button shadow-sm' style={{ width: '27rem', height: '4rem' }}>
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
      </Nav.Link>
    </>
  );
}

function CreateAccountButton() {
  return (
    <>
      <div className='bg-primary rounded-pill mx-auto mb-3 p-0 button shadow-sm btn' style={{ width: '27rem', height: '4rem' }}>
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
    </>
  );
}

// function SignUpForm() {
//   return (
//     <div id='container'>
//       <div id='conteudo'>
//         <h1>Criar Nova Conta</h1>
//         <hr />
//         <h5>Nome</h5>
//         <input className='input' type='text' placeholder='Digite Seu Nome' />
//         <h5>Email</h5>
//         <input className='input' type='email' placeholder='Digite Seu Email' />
//         <h5>Senha</h5>
//         <input className='input' type='password' placeholder='Digite Sua Senha' />
//         <br />
//         <br />
//         <button>Cadastrar</button>
//         <br />
//         <button>Fazer Login</button>
//       </div>
//     </div>
//   );
// }
