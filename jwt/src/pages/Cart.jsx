import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { useUser } from "../contexts/UserContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { token } = useUser();
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      if (response.ok) {
        setMessage("Purchase successful!");
      } else {
        setMessage("Error during purchase.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setMessage("An error occurred.");
    }
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cart;
