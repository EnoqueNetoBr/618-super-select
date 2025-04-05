import './dashboard.css';

const styleMinHeight = { minHeight: '50px' };

function Dashboard() {
  return (
    <>
      <div className="container-fluid m-0 p-0 bg-dark position-relative w-100 h-100" style={{ minHeight: "100vh" }}>

        <div className="row m-0 p-0 position-absolute" style={{ top: "0px", bottom: "0px", left: "0px", right: "0px" }}>

          {/* Menu Container */}
          <div className="col-3 m-0 p-0 bg-secondary">


            {/* Pill Component */}
            <div className="row m-0 p-0 min-height bg-danger rounded-pill ">
              <div className="col-3 m-0 p-0 min-height d-flex justify-content-center h-100 ps-3">
                <div className="container-fluid m-0 p-0 bg-warning  align-items-center m-auto position-relative d-flex justify-content-center aling-item-center" style={{ width: "100%", height: "auto", aspectRatio: "1/1", maxWidth: "50px", minWidth: "25px" }}>
                  <i class="bi bi-airplane-fill" style={{ fontSize: "3vw" }}></i>
                </div>
              </div>
              <div className="col m-0 p-0 position-relative d-flex justify-content-center align-items-center bg-secondary bg-opacity-50" style={{ top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                <p className='bg-light my-auto' style={{fontSize:"3vw"}}>
                  Descrição
                </p>

              </div>
            </div>

          </div>

          {/* Products Container */}
          <div className="col bg-dark">

          </div>
        </div>

      </div>
    </>
  );
}



export default Dashboard;
