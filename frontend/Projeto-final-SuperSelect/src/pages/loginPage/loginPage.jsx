export function LogInPage() {
  return (
    <>
      <div className='container-fluid bg-secondary m-0 p-0 d-flex justify-content-center align-items-center' style={{ height: '75vh' }}>
        <LogInForm />
      </div>
    </>
  );
}

function LogInForm() {
  return (
    <>
      <div className='container m-0 p-0 bg-light rounded-5' style={{ width: '30rem', height: '30rem' }}>
        <form method='' action=''>
          <div className='container m-0 p-0 p-4'>
            <label htmlFor='loginUserEmail'>Endereço de email: </label>
            <input className='form-control' type='mail' name='loginUserEmail' id='loginUserEmail' />
            <label htmlFor='loginPassword'>Senha:</label>
            <input className='form-control' type='password' name='loginPassword' id='loginPassword' />

            <button type='submit' style={{ all: 'unset' }}>
              <LogInSubmitButton />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function LogInSubmitButton() {
  return (
    <>
      <div className='bg-primary rounded-pill mx-auto my-3 p-0 button shadow-sm' style={{ width: '27rem', height: '4rem' }}>
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
