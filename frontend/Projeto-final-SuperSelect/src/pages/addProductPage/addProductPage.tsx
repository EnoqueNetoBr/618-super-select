import { useState } from 'react';
import { DashCard } from '../../components/dashboard/dashCard/dashCard';
import backgroundImg from '../../images/background/fruitsAndVegetablesBackground.jpg';
import { IProduct } from '../../customTypes';
import defaultImage from './../../components/dashboard/dashCard/DefaultProductImage.png';

interface IResetCardButtonProps {
  handleReset: () => void;
}

interface IProductFormInputsProps {
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  setProductDescription: React.Dispatch<React.SetStateAction<string>>;
  setProductPrice: React.Dispatch<React.SetStateAction<number>>;
  setProductImgUrl: React.Dispatch<React.SetStateAction<string>>;
  setProductRating: React.Dispatch<React.SetStateAction<number>>;
  setProductNumberOfReviews: React.Dispatch<React.SetStateAction<number>>;
  setImgUpdater: React.Dispatch<React.SetStateAction<number>>;
  imgUpdater: number;
}

export function AddProductPage() {
  const [productName, setProductName] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productImgUrl, setProductImgUrl] = useState<string>('');
  const [productRating, setProductRating] = useState<number>(0);
  const [productNumberOfReviews, setProductNumberOfReviews] = useState<number>(0);
  const [imgUpdater, setImgUpdater] = useState<number>(0);

  function handleReset() {
    setProductName('');
    setProductPrice(0);
    setProductRating(0);
    setProductNumberOfReviews(0);

    return;
  }

  const customProduct: IProduct = {
    id: 0,
    name: productName,
    description: productDescription,
    price: productPrice,
    imgUrl: defaultImage,
    rating: productRating,
    numberReviews: productNumberOfReviews,
  };

  return (
    <>
      <div className=' bg-secondary m-0 p-0 ' style={{ height: '75vh' }}>
        <form className=' row h-100' action=''>
          <div className='col-4 h-100 d-flex justify-content-center align-items-center  m-0 p-0' style={{ position: 'relative' }}>
            <ProductFormInputs setProductName={setProductName} setProductDescription={setProductDescription} setProductPrice={setProductPrice} setProductImgUrl={setProductImgUrl} setProductRating={setProductRating} setProductNumberOfReviews={setProductNumberOfReviews} setImgUpdater={setImgUpdater} imgUpdater={imgUpdater} />
            <div className='' style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px', overflow: 'clip' }}>
              <img className='h-100' src={backgroundImg} alt='' style={{ objectFit: 'cover', opacity: '25%' }} />
            </div>
          </div>
          <div className='col bg-secondary h-100  m-0 p-0' style={{ position: 'relative' }}>
            <div className='row bg-secondary m-0 my-3 ' style={{ position: 'absolute', top: '0px', left: '0px', right: '0px' }}>
              <div className='col d-flex justify-content-center align-items-center'>
                <p className='text-center text-light fs-2'>Preview: </p>
              </div>
            </div>
            <div className='row my-auto mx-0 p-0 h-100'>
              <div className='col d-flex justify-content-center align-items-center'>
                <DashCard product={customProduct} />
              </div>
            </div>
          </div>
          <div className='col-4 h-100 bg-secondary d-flex flex-column justify-content-around align-items-center'>
            <ResetCardButton handleReset={handleReset} />
            <ConfirmCardButton />
          </div>
        </form>
      </div>
    </>
  );
}

function ProductFormInputs(props: IProductFormInputsProps) {
  return (
    <>
      <div className='container m-0 p-0 rounded-5 shadow-lg' style={{ width: '30rem', height: '40rem', zIndex: '10', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <form className='h-100' onSubmit={handleSubmit}>
          <div className='container m-0 p-0 p-4 d-flex flex-column justify-content-center align-items-around h-100 w-100 '>
            <div className='my-auto'>
              <label htmlFor='productImage'>
                <p className='fs-5'>Imagem: </p>
              </label>
              <input onChange={() => props.setImgUpdater(props.imgUpdater + 1)} className='form-control shadow-sm' type='file' name='productImage' id='productImage' />
            </div>

            <div className='my-auto'>
              <label htmlFor='productName'>
                <p className='fs-5'>Nome: </p>
              </label>
              <input onChange={(e) => props.setProductName(e.target.value)} className='form-control shadow-sm' type='text' name='productName' id='productName' />
            </div>

            <div className='my-auto d-none'>
              <label htmlFor='productDescription'>
                <p className='fs-5'>Descrição: </p>
              </label>
              <input onChange={(e) => props.setProductDescription(e.target.value)} className='form-control shadow-sm' type='text' name='productDescription' id='productDescription' />
            </div>

            <div className='my-auto'>
              <label htmlFor='productPrice'>
                <p className='fs-5'>Preço(em centavos): </p>
              </label>
              <input onChange={(e) => props.setProductPrice(Number(e.target.value))} className='form-control shadow-sm' type='number' name='productPrice' id='productPrice' />
            </div>

            <div className='my-auto'>
              <label htmlFor='productRating'>
                <p className='fs-5'>Nota(de 0 a 5): </p>
              </label>
              <input onChange={(e) => props.setProductRating(Number(e.target.value))} className='form-control shadow-sm' type='number' name='productRating' id='productRating' />
            </div>

            <div className='my-auto'>
              <label htmlFor='productNumberOfReviews'>
                <p className='fs-5'>Número de Reviews: </p>
              </label>
              <input onChange={(e) => props.setProductNumberOfReviews(Number(e.target.value))} className='form-control shadow-sm' type='number' name='productNumberOfReviews' id='productNumberOfReviews' />
            </div>

            <button className='mt-auto' type='submit' style={{ all: 'unset' }}>
              {/* <CreateAccountButton /> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ResetCardButton(props: IResetCardButtonProps) {
  return (
    <div className='bg-danger rounded-4  m-0 p-0 d-flex justify-content-center align-items-center btn' style={{ width: '12rem', height: '12rem' }} onClick={props.handleReset}>
      <i className='bi bi-arrow-counterclockwise m-0 p-0 text-light' style={{ fontSize: '9rem' }} />
    </div>
  );
}

function ConfirmCardButton() {
  return (
    <div className='bg-success rounded-4  m-0 p-0 d-flex justify-content-center align-items-center btn ' style={{ width: '12rem', height: '12rem' }}>
      <i className='bi bi-check-circle m-0 p-0 text-light' style={{ fontSize: '9rem' }} />
    </div>
  );
}

function handleSubmit() {
  return;
}
