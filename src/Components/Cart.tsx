import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
 
} from "../Redux/cartSlice"; 
import { Link } from "react-router-dom";
import { RootState } from '../Redux/Store';
import Login from "./Login";
import { Tooltip } from 'antd';
import {Image} from 'antd';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

function Cart() {
  const dispatch = useDispatch(); 
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.items);
  const isLoggedIn  = useSelector((state:RootState) => state.user.isLoggedIn);


  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleDelete = (itemId: number) => {
    dispatch(removeFromCart({ id: itemId }));
  };
  const calculateTotal = () => {
    return cartItems
      .reduce((total: number, item: CartItem) => total + 5 + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const calculateTotalQuantity = () => {
    return cartItems.reduce(
      (totalQuantity: number, item: CartItem) => totalQuantity + item.quantity,
      0
    );
  };

  return (
    <>
     {isLoggedIn ? (
     <>
      <section className="h-100 h-custom  font-bold">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0 ">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5 text-xl">
                          <h4 className="  fw-bold mb-0 text-black h-auto  ">
                             Shopping Cart
                          </h4>
                          <h6 className="mb-0 text-muted">
                            total items {calculateTotalQuantity()}
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {cartItems.map((item, index) => (
                          <div
                            className="row mb-4 d-flex justify-content-between align-items-center"
                            key={index}
                          >
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <Image
                                src={item.image}
                                className="img-fluid rounded-3"
                                alt={item.title}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{item.category}</h6>
                              <h6 className="text-black mb-0">{item.title}</h6>
                            </div>

                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <Tooltip title="Decrease quantity">
                              

                              <button title="d"
                                className="btn btn-link px-2 text-muted "
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                              >
                              <i className="fa fa-minus"></i>
                              </button>
                              </Tooltip>

                              <h5 className="text-center  py-3">{item.quantity}</h5>
                                <Tooltip title="increase quantity">
                              <button title="i"
                                className="btn btn-link px-2 text-muted"
                                onClick={() =>
                                  handleUpdateQuantity(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                              </Tooltip>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">
                                {`$ ${(item.price * item.quantity).toFixed(2)}`}
                              </h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                           
                                <Tooltip title="Remove Product from cart">
                              <button
                                 title="Delete item"
                                className="btn btn-link text-muted"
                                onClick={() => handleDelete(item.id)}
                              >
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              </Tooltip>

                            </div>
                            <hr className="my-4" />
                          </div>
                          
                        ))}
                   
                      </div>
                    </div>

                    <div className="col-lg-4 bg-grey border border-gray">
                      <div className="p-4">
                        <div className="pt-2">
                          <h4 className="fw-bold mb-5 mt-2 pt-1 text-center">
                            Summary
                          </h4>

                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          {/* <h5>User Name : </h5> */}
                          <h5 className="text-uppercase">{`Items `}</h5>
                          <h5>{calculateTotalQuantity()}</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase mb-3">
                            Delivery Charges{" "}
                          </h5>
                          <h4>$ 5</h4>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{`$ ${calculateTotal()}`}</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-5 ">
                     
                          <Link
                            to="/check"
                 
                        
                            type="button"
                            className="btn btn-outline-dark ms-2"
                            data-mdb-ripple-color="dark"
                             
                        
                          >
                           Confirm Order 
                          </Link>



                          <a href="/products" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>)
      :(
        <>
        <div>
     
          <Login/>
     

        </div>
        </>
      )
      }
    </>
  );
}

export default Cart;
