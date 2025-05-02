import './dashboard.css';
import { DashCard } from '../../components/dashboard/dashCard/dashCard';

function Dashboard() {
  return (
    <>
      <div className='landscape'>
        <div className='myDashboardPage container-fluid m-0 p-0'>
          {/* Dashboard Header */}
          <div className='myDashboardHeader utilityMinBox'></div>

          {/* Dashboard Content */}
          <div className='myDashboardContent utilityMinBox row m-0 p-0'>
            {/* Side Menu */}
            <div className='myDashboardSideMenu col-5 col-md-4 col-lg-3 col-xl-2 h-100'>
              {/* Side Menu Title */}
              <div className='myDashboardSideMenuTitle utilityMinBox mt-3 d-flex justify-content-center align-items-center'>
                <p className='fs-1'>Menu</p>
              </div>

              {/* Buttons Container */}
              <div className='myDashboardButtonsContainer utilityMinBox h-75 d-flex flex-column justify-content-start align-items-center'>
                {/* Button Example (Repeat for each button) */}
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className='dashboardButton mx-auto mt-3 p-0 rounded-pill d-flex justify-content-start align-items-center'>
                      <div className='dashboardButtonSeparator pe-2'>
                        <i className='dashboardButtonIcon bi bi-airplane-fill ms-3 text-ss-blue'></i>
                      </div>
                      <div className='dashboardButtonText ms-2'>Histórico de compras</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Products Section */}
            <div className='myDashboardProducts col bg-light p-3'>
              {/* Products Title */}
              <div className='myDashboardProductsTitle row utilityMinBox mt-3'>
                <p className='fs-5'>Produtos:</p>
              </div>

              {/* Products Cards Container */}
              <div className='myDashboardProductsCards row utilityMinBox mt-3 d-flex justify-content-start align-items-start'>
                {/* Product Card Example (Repeat for each product) */}
                {Array(3)
                  .fill(null)
                  .map(() => (
                    <DashCard />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='portrait'></div>
    </>
  );
}

export default Dashboard;
