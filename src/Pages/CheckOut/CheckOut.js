import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CheckOut = () => {
  const [user] = useAuthState(auth);

  const checkOutButton = (event) => {
    event.preventDefault();
  };
  return (
    <div className="h-full flex mt-10 flex-col justify-center items-center mx-auto">
      <h2 className="text-black text-3xl font-bold uppercase tracking-widest signup-title">
        Fit<span style={{ color: "greenyellow" }}>L</span>ife G
        <span style={{ color: "greenyellow" }}>y</span>m
      </h2>
      <form
        onSubmit={checkOutButton}
        className="flex mt-5 flex-col justify-center items-center h-full from-style"
      >
        <input required type="text" name="name" id="" placeholder="Name" />
        <input
          value={user?.email}
          readOnly
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          required
          type="text"
          name="address"
          id=""
          placeholder="Address"
        />
        <input required type="text" name="zip" id="" placeholder="Zip Code" />
        <input
          required
          type="text"
          name="phone number"
          id=""
          placeholder="Phone Number"
        />

        <button
          onClick={checkOutButton}
          className="hover:bg-green-600 hover:text-white bg-green-500 w-full text-lg font-bold mb-5 text-white mt-10 py-2"
        >
          Check Out
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
