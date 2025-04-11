<>
  // MyButton
  <div className=' btn btn-secondary rounded-pill d-flex justify-content-start align-items-center m-0 p-0' style={{ width: '12rem', height: '3rem' }}>
    <i class='bi bi-airplane-engines  ms-3' style={{ fontSize: '1.3rem' }}></i>

    <span className='ms-2' style={{ borderRight: '1px solid #000', height: '2rem' }}></span>

    <div className='myTextContainer ms-2 ' style={{ maxWidth: '7rem', overflow: 'hidden' }}>
      <div className=' fs-6 '>Click Me</div>
    </div>
  </div>
  ; // Dynamic Card v.1
  <div className='d-flex justify-content-center aling-items-center vh-100 vw-100 myBorder p-5'>
    <a href='#' className='btn'>
      <div className='card myCard rounded-4' style={{ width: '18vw', height: 'auto', aspectRatio: '3/4', minWidth: '9rem', maxWidth: '12rem' }}>
        <div className='imageContainer  my-3 d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
          <img src='https://picsum.photos/200' className='card-img-top myImage' alt='...' style={{ width: '65%' }} />
        </div>

        <div className='card-body   p-0 d-flex flex-column justify-content-between aling-items-center' style={{ height: '50%' }}>
          <div>
            <h5 className='card-title text-center myDynamicFont'>R$10,00</h5>
          </div>
          <div>
            <h5 className='card-title text-center  m-0 p-0 myDynamicFont'>NomeProduto</h5>
          </div>
          <div className=''>
            <p className='card-text text-center myDynamicFont'>Avaliação</p>
          </div>
        </div>
      </div>
    </a>
  </div>
  // Elastic Button V2
  {/* Button 01 Start */}
  <div className='dashboardButton  m-0 p-0  rounded-pill d-flex justify-content-start align-items-center'>
    <div className='dashboardButtonSeparator pe-2'>
      <i className='dashboardButtonIcon  bi bi-airplane-fill ms-3 text-ss-blue'></i>
    </div>

    <div className='dashboardButtonText  ms-2 '>Histórico de compras</div>
  </div>
  {/* Button 01 End */}



  
  {/* Elastic Card V2 */}
  <a href='#' className='btn'>
    <div className='card myDashboardCard rounded-4' style={{ width: '18vw', height: 'auto', aspectRatio: '3/4', minWidth: '9rem', maxWidth: '12rem' }}>
      <div className=' my-3 d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
        <img src={defaultImage} className='myDashboardCardImage' alt='Imagem do produto.' style={{ width: '65%' }} />
      </div>

      <div className='card-body m-0 p-2  d-flex flex-column justify-content-between aling-items-center' style={{ height: '50%' }}>
        <div>
          <h5 className='card-title text-center m-0 p-0 myCardDynamicFontPrice'>R$ 10,00</h5>
        </div>
        <div>
          <h5 className='card-title text-center  m-0 p-0 myCardDynamicFontProductName'>NomeProduto</h5>
        </div>
        <div className=' d-flex flex-row justify-content-between align-items-center'>
          <p className='myDashboardCardRating  my-auto d-none d-lg-inline'>4,5</p>

          {/*START Stars */}
          <i className='bi bi-star-fill my-auto myDashboardCardStar' />
          <i className='bi bi-star-fill my-auto myDashboardCardStar' />
          <i className='bi bi-star-fill my-auto myDashboardCardStar' />
          <i className='bi bi-star-fill my-auto myDashboardCardStar' />
          <i className='bi bi-star-fill my-auto myDashboardCardStar' />
          {/*END Stars */}

          <p className='myDashboardCardNumberReviews my-auto'>&#40; 89 reviews &#41;</p>
        </div>
      </div>
    </div>
  </a>
</>;
