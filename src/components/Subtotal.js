import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong> {value} </strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        thousandSeparator={true}
        displayType={"text"}
        value={getBasketTotal(basket)}
        prefix={"$"}
      />
      {/* Price */}
      <button>Process to checkout</button>
    </div>
  );
};

export default Subtotal;
