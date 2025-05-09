import './dashboardPage.css';
import { DashCard } from '../../components/dashboard/dashCard/dashCard';
import { DashButton } from '../../components/dashboard/dashButton/dashButton';

export function DashboardPage() {
  return (
    <>
      <div className='landscape'>
        <div className='myDashboardPage container-fluid m-0 p-0'>
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
                {/* {Array(5)
                  .fill(null)
                  .map(() => (
                    <>
                      <DashButton />
                    </>
                  ))} */}

                <DashButton iconName='bi-house' buttonLabel='Home' navLink='/' />
                <DashButton iconName='bi-plus-circle' buttonLabel='Adicionar Produto' navLink='/addprod' />
                <DashButton iconName='bi-clock-history' buttonLabel='Histórico de Produtos' />
                <DashButton iconName='bi-clipboard2-data' buttonLabel='Relatórios' />
                <DashButton iconName='bi-gear' buttonLabel='Configurações' />
              </div>
            </div>

            {/* Products Section */}
            <div className='myDashboardProducts col bg-light p-3'>
              {/* Products Title */}
              <div className='myDashboardProductsTitle row utilityMinBox mt-3'>
                <p className='fs-3'>Produtos:</p>
              </div>

              {/* Products Cards Container */}
              <div className='myDashboardProductsCards row utilityMinBox mt-3 d-flex justify-content-start align-items-start '>
                {/* Product Card Example (Repeat for each product) */}

                {Array(10)
                  .fill(null)
                  .map(() => (
                    <div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center align-items-center '>
                      <DashCard />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='portrait'>
        <div className='myDashboardPage container-fluid m-0 p-0'>
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
                  .map(() => (
                    <DashButton iconName={''} buttonLabel={''} />
                  ))}
              </div>
            </div>

            {/* Products Section */}
            <div className='myDashboardProducts col bg-light p-3'>
              {/* Products Title */}
              <div className='myDashboardProductsTitle row utilityMinBox mt-3'>
                <p className='fs-3'>Produtos:</p>
              </div>

              {/* Products Cards Container */}
              <div className='myDashboardProductsCards row utilityMinBox mt-3 d-flex justify-content-start align-items-start '>
                {/* Product Card Example (Repeat for each product) */}

                {Array(10)
                  .fill(null)
                  .map(() => (
                    <div className='col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center align-items-center '>
                      <DashCard />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
