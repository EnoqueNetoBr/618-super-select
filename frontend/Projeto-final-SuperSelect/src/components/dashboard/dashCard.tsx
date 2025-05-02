import './dashCard.css';
import defaultImg from '../../../public/DefaultProductImage.png';
import { Product, IDashCardProps } from '../../customTypes';

const defaultDashCardProps: Product = {
  ID: 0,
  Name: '',
  Price: 0,
  imgUrl: defaultImg,
};

// Set default props
DashCard.defaultProps = {
  product: defaultDashCardProps,
};

export function DashCard({ product = defaultDashCardProps }: IDashCardProps) {
  return (
    <div key={product.ID} className='col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center'>
      <a href='#' className='btn'>
        <div className='card myDashboardCard rounded-4' style={{ width: '18vw', height: 'auto', aspectRatio: '3/4', minWidth: '9rem', maxWidth: '12rem' }}>
          {/* Product Image */}
          <div className='my-3 d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
            <img src={product.imgUrl} className='myDashboardCardImage' alt='Imagem do produto.' style={{ width: '65%' }} />
          </div>

          {/* Card Body */}
          <div className='card-body m-0 p-2 d-flex flex-column justify-content-between align-items-center' style={{ height: '50%' }}>
            <div>
              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontPrice'>R$ {product.Price.toFixed(2)}</h5>
            </div>
            <div>
              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontProductName'>{product.Name}</h5>
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
  );
}
