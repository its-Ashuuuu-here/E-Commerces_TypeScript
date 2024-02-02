import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../Redux/cartSlice";
import { Progress, Space } from "antd";
import { RootState } from '../Redux/Store';
import Login from "./Login";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
};

const Check = () => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.items);
  const isLoggedIn  = useSelector((state:RootState) => state.user.isLoggedIn);

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total: number, item: CartItem) =>
          total + 5 + item.price * item.quantity,
        0
      )
      .toFixed(2);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
     {isLoggedIn ? (
     <>
      <div className="flex min-h-screen items-center justify-center   bg-gray-100">
        <div className="rounded-lg bg-gray-50 px-16 py-5">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-5">
              <Space>
                <Progress type="circle" percent={100} format={() => "Done"} />
              </Space>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
            Congratuation!!!
          </h3>
          <p className="w-[230px] text-center  text-gray-600 font-bold">
            Total Amount: {`$ ${calculateTotal()}`}
          </p>
          <p className="w-[230px] text-center font-normal text-gray-600">
            Your order have been taken and is being attended to
          </p>
          <Link
            to="/products"
            onClick={handleClearCart}
            className="btn btn-outline-dark ms-2 "
          >
            Continue Shopping
          </Link>
          <Link to="/cart" className="btn btn-outline-dark ms-2">
            Back
          </Link>
        </div>
      </div>
      </>
     ):(
      <>
      <Login/>
      </>

     )
}
    </>
  );
};

export default Check;
