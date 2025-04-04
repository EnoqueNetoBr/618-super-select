import './dashboard.css';

const styleMinHeight = { minHeight: '50px' };

function Dashboard() {
  return (
    <>
      <div className='container-fluid bg-secondary vh-100'>
        <div className='row bg-primary h-100' style={styleMinHeight}>
          <div className='col-3 bg-light p-0' style={styleMinHeight}>
            {/* Pill Button Menu */}

            <div className='row bg-danger w-100 p-0 m-0 d-flex justify-content-center align-items-center' style={styleMinHeight}>
              <div className='col-10 btn btn-warning rounded-pill' style={styleMinHeight}>
                {/* Pill Icon + Description */}

                <div className='row bg-dark' style={styleMinHeight}>
                  {/* Pill Icon Placeholder */}

                  <div className='col-3 bg-primary' style={styleMinHeight}></div>

                  {/* Pill Description */}

                  <div className='col bg-secondary' style={styleMinHeight}></div>
                </div>
              </div>
            </div>

            {/*END Pill Button Menu */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
