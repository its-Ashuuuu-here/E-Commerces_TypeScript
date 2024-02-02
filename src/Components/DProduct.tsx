import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { AppDispatch, RootState } from "../Redux/Store";
import { fetchProductById } from "../Redux/productSlice";
import { addToCart } from "../Redux/cartSlice";
import { Image,  Spin, Tag, Watermark } from "antd";
import { message } from "antd";
import { Rate } from "antd";


const DProduct: React.FC = () =>  {

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const { loading, error, selectedProduct } = useSelector(
    (state: RootState) => state.product
  );
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [dispatch, id]);

  const info = () => {
    message.success("Add Product Sucessfully!");
  };

  if (loading) 
  {
    
    return (
      
      <div className="h-fullscreen justify-center">
        <Spin
          size="large"
          tip="Loading..."
          className="flex gap-middle text-blue text-center fullscreen justify-center mb-11 mt-11"
        ></Spin>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(
        addToCart({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,

          image: selectedProduct.image,
          category: selectedProduct.category,
          quantity: 1,
        })
      );
      info();
    }
  };
  return (
    <>
      <div className="container py-5 mt-0">
        <div className="row pb-5  pt-3">
          <div className="col-md-6">
            <Watermark content="Online Shopping">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                height="440px"
                width="400px"
                className=" mt-0 cursor-pointer background-transparent hover:scale-110  ease-linear duration-200"
              />
            </Watermark>
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {selectedProduct.category}
            </h4>
            <h1 className="display-5">{selectedProduct.title}</h1>
            <p className="lead fw-bolder ">
              {/* Rating {selectedProduct.rating.rate}      */}
              <Rate allowHalf defaultValue={selectedProduct.rating.rate} />

              <Tag color="#2db7f5" className="ml-3 ">
                {selectedProduct.rating.count}
              </Tag>
            </p>
            <h3 className="display-6 fw-bold my-4">${selectedProduct.price}</h3>
            <p className="lead text-justify">{selectedProduct.description}</p>

            <button
              // onClick={() => dispatch(increment())}
              onClick={handleAddToCart}
              className="btn btn-outline-dark"
            >
              Add to Cart
            </button>

            {isLoggedIn ? (
              <Link to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                Go to cart
              </Link>
            ) : (
              <Link to="/" className="btn btn-outline-dark ms-2 px-3 py-2">
                Go to cart
              </Link>
            )}
            <Link
              to="/products"
              className="btn btn-outline-dark ms-2 px-3 py-2"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DProduct;
