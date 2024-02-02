import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilter } from "../Redux/productSlice";
import { Spin, Tooltip } from "antd";

const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.product);
  const Products = useSelector((state: RootState) => state.product.data);
  const [filter, setfilter] = useState<string | null>(null);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(Products);
  if (loading) {
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
  const handelfilter = (category: string | null) => {
    if (category === "all") {
      setfilter(null);
      dispatch(fetchProducts());
      return;
    }
    console.log(category);
    setfilter(category);
    
    dispatch(setFilter(category));
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="buttons d-flex justify-content-center mb-3 pb-5 ">
            <button
              className="btn btn-outline-dark me-2 active"
              onClick={() => handelfilter(null)}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2 "
              onClick={() => handelfilter("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handelfilter("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handelfilter("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handelfilter("electronics")}
            >
              Electronic
            </button>
          </div>

          {(Products || Products)
            .filter((product) => product.category === filter || filter === null)
            .map((product) => (
              <div className="col-md-3 my-2" key={product.id}>
                <div className="card h-100 txt-center p-4 ">
                  <img
                    src={product.image}
                    className="card-img-top img2  cursor-pointer hover:scale-110 ease-linear duration-200"
                    alt="..."
                    width="250px"
                    height="250px"
                  />

                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Tooltip title="View Details">
                      <Link
                        to={`/dproduct/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Read More
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
// export const fetchProductById = createAsyncThunk('product/fetchById', async (id: number) => {
//   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const data = await response.json();
//   return data as Product;
// });
