// import './appHeader.css'

function MainLogo() {
  return (
    <>
      <div className='container-fluid m-0 p-0 w-100 h-100'>
        <div className='row h-100 '>
          <div className='col-3'>
            <div className='d-flex flex-column justify-content-center aling-items-end h-100'>
              <i className='bi bi-cart fs-1 text-end' />
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column justify-content-center align-items-start h-100'>
              <h2 className=''>SuperSelect</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div className='container-fluid w-100 h-100 '>
        <div className='row h-100'>
          <div className='col'></div>

          <div className='col-8 d-flex flex-column justify-content-center aling-items-end m-0 p-0'>
            <form action=''>
              <input className='form-control ' type='text' name='headerSearch' id='headerSearch' placeholder='Procurando por algo?' style={{ borderRadius: '0.5rem 0 0 0.5rem', height: '2.5rem', textAlign: 'center' }} />
            </form>
          </div>
          <div className='col-2  d-flex flex-column justify-content-center align-items-start ps-0'>
            <div className='bg-dark px-3 d-flex flex-column justify-content-center align-items-center form-control' style={{ height: '2.5rem', borderRadius: '0 0.5rem 0.5rem 0' }}>
              <i className='bi bi-search text-light'></i>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </>
  );
}

export function AppHeader() {
  return (
    <>
      <>
        <div className='landscape container-fluid'>
          <div className='row' style={{ backgroundColor: '#007bff', width: '100%', height: '10rem' }}>
            <div className='col-4 '>
              <MainLogo />
            </div>
            <div className='col-4 '>
              <SearchBar />
            </div>
            <div className='col-4'></div>
          </div>
        </div>
        <div className='portrait container-fluid'>
          <h1>No portrait implementation yet.</h1>
        </div>
      </>
    </>
  );
}
