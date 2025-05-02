import './dashboard.css';
import defaultImage from '../../../public/DefaultProductImage.png';

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
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className='col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center'>
                      <a href='#' className='btn'>
                        <div className='card myDashboardCard rounded-4' style={{ width: '18vw', height: 'auto', aspectRatio: '3/4', minWidth: '9rem', maxWidth: '12rem' }}>
                          {/* Product Image */}
                          <div className='my-3 d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
                            <img src={defaultImage} className='myDashboardCardImage' alt='Imagem do produto.' style={{ width: '65%' }} />
                          </div>

                          {/* Card Body */}
                          <div className='card-body m-0 p-2 d-flex flex-column justify-content-between align-items-center' style={{ height: '50%' }}>
                            <div>
                              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontPrice'>R$ 10,00</h5>
                            </div>
                            <div>
                              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontProductName'>NomeProduto</h5>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                              <p className='myDashboardCardRating my-auto d-none d-lg-inline'>4,5</p>
                              {/* Stars */}
                              {[...Array(5)].map((_, starIndex) => (
                                <i key={starIndex} className='bi bi-star-fill my-auto myDashboardCardStar' />
                              ))}
                              <p className='myDashboardCardNumberReviews my-auto'>&#40; 89 reviews &#41;</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
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
