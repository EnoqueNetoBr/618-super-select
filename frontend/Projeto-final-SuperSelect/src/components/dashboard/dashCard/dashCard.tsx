import './dashCard.css';
import defaultImg from '../../../../public/DefaultProductImage.png';
import { IProduct, IDashCardProps } from '../../../customTypes';

const defaultDashCardProps: IProduct = {
  id: 0,
  name: 'No name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
  price: 0,
  imgUrl: defaultImg,
  rating: 0,
  numberReviews: 0,
};

// Set default props
DashCard.defaultProps = {
  product: defaultDashCardProps,
};

export function DashCard({ product = defaultDashCardProps }: IDashCardProps) {
  return (
    <div key={product.id} className='container-fluid m-0 p-0 d-flex justify-content-center align-items-center'>
      <a href='#' className='btn'>
        <div className='card myDashboardCard rounded-4' style={{ width: '18vw', height: 'auto', aspectRatio: '3/4', minWidth: '9rem', maxWidth: '12rem' }}>
          {/* Product Image */}
          <div className='my-3 d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
            <img src={product.imgUrl} className='myDashboardCardImage' alt='Imagem do produto.' style={{ width: '65%' }} />
          </div>

          {/* Card Body */}
          <div className='card-body m-0 p-2 d-flex flex-column justify-content-between align-items-center' style={{ height: '50%' }}>
            <div>
              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontPrice'>R$ {product.price.toFixed(2)}</h5>
            </div>
            <div>
              <h5 className='card-title text-center m-0 p-0 myCardDynamicFontPrice'>{product.name}</h5>
            </div>
            {/* Card Body Description */}
            <div className='row w-100 h-100 d-none'>
              <p className='col-10 myCardDynamicFontProductName '>{product.description}</p>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              <p className='myDashboardCardRating my-auto d-none d-lg-inline'>{product.rating}</p>
              {/* Stars */}
              {[...Array(5)].map((_, starIndex) => (
                <i key={starIndex} className='bi bi-star-fill my-auto myDashboardCardStar' />
              ))}
              <p className='myDashboardCardNumberReviews my-auto'>&#40; {product.numberReviews} reviews &#41;</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
